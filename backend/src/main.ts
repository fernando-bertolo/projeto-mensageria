import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {
    PRODUTOS_IMPORTACAO_QUEUE,
    STATUS_PRODUTOS_QUEUE,
} from './features/produtos/infrastructure/constants/constants';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: 'http://localhost:4200',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        allowedHeaders: ['Content-Type'],
    });

    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: PRODUTOS_IMPORTACAO_QUEUE,
            queueOptions: {
                durable: true,
            },
        },
    });
    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: STATUS_PRODUTOS_QUEUE,
            queueOptions: {
                durable: true,
            },
        },
    });

    await app.startAllMicroservices();

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
