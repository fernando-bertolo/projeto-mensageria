import { Module } from '@nestjs/common';
import { ProdutoController } from '../controllers/produto.controller';
import { CadastrarProdutoUseCaseImpl } from '../../application/usecases/cadastrar-produto.usecase.impl';

@Module({
    imports: [],
    controllers: [ProdutoController],
    providers: [CadastrarProdutoUseCaseImpl],
})
export class ProdutoModule {}
