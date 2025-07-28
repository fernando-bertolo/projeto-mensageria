import { Module } from '@nestjs/common';
import { ProdutoController } from '../controllers/produto.controller';
import { CadastrarProdutoUseCaseImpl } from '../../application/usecases/cadastrar-produto.usecase.impl';
import { ProdutoTypeormRepository } from '../persistence/repositories/produto-typeorm.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntity } from '../persistence/entities/produto.entity';
import { BuscarProdutosUseCaseImpl } from '../../application/usecases/buscar-produtos.usecase.impl';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
    PRODUCTS_SERVICE,
    PRODUTOS_IMPORTACAO_QUEUE,
} from '../constants/constants';
import { ProdutoConsumerController } from '../controllers/produto-consumer.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProdutoEntity]),
        ClientsModule.register([
            {
                name: PRODUCTS_SERVICE,
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: PRODUTOS_IMPORTACAO_QUEUE,
                    queueOptions: {
                        durable: true,
                    },
                },
            },
        ]),
    ],
    controllers: [ProdutoController, ProdutoConsumerController],
    providers: [
        {
            provide: 'CadastrarProdutoUseCase',
            useClass: CadastrarProdutoUseCaseImpl,
        },
        {
            provide: 'BuscarProdutosUseCase',
            useClass: BuscarProdutosUseCaseImpl,
        },
        {
            provide: 'ProdutoGateway',
            useClass: ProdutoTypeormRepository,
        },
    ],
    exports: [ClientsModule],
})
export class ProdutoModule {}
