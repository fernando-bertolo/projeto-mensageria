import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './features/produtos/infrastructure/modules/produto.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'nestdb',
            entities: [__dirname + '/**/*.entity.{ts,js}'],
            synchronize: true,
            migrations: [__dirname + '/migrations/*{.ts,.js}'],
        }),
        ProdutoModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
