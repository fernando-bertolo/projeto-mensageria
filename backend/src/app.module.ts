import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'nestdb',
            entities: [],
            synchronize: true,
            migrations: [__dirname + '/migrations/*{.ts,.js}'],
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
