import { Module } from '@nestjs/common';
import { ProdutoController } from '../controllers/produto.controller';
import { CadastrarProdutoUseCaseImpl } from '../../application/usecases/cadastrar-produto.usecase.impl';
import { ProdutoTypeormRepository } from '../persistence/repositories/produto-typeorm.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntity } from '../persistence/entities/produto.entity';
import { BuscarProdutosUseCaseImpl } from '../../application/usecases/buscar-produtos.usecase.impl';

@Module({
    imports: [TypeOrmModule.forFeature([ProdutoEntity])],
    controllers: [ProdutoController],
    providers: [
        {
            provide: 'CadastrarProdutoUseCase',
            useClass: CadastrarProdutoUseCaseImpl
        },
        {
            provide: 'BuscarProdutosUseCase',
            useClass: BuscarProdutosUseCaseImpl
        },
        {
            provide: 'ProdutoGateway',
            useClass: ProdutoTypeormRepository
        }
    ],
    exports: []
})
export class ProdutoModule {}
