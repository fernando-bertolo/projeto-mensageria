import { Inject, Injectable } from '@nestjs/common';
import { ProdutoGateway } from '../../core/gateways/produto.gateway';
import { CadastrarProdutoUseCase } from './cadastrar-produto.usecase';
import { Produto } from '../../core/entities/produto';
import { BuscarProdutosUseCase } from './buscar-produtos.usecase';

@Injectable()
export class BuscarProdutosUseCaseImpl implements BuscarProdutosUseCase {
    constructor(
        @Inject('ProdutoGateway')
        private readonly produtoGateway: ProdutoGateway
    ) {}
    
    async buscarProduto(): Promise<Produto[]> {
        return this.produtoGateway.findAll();
    }
}
