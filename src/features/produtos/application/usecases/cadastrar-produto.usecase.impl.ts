import { Injectable } from '@nestjs/common';
import { ProdutoGateway } from '../../core/gateways/produto.gateway';
import { CadastrarProdutoUseCase } from './cadastrar-produto.usecase';
import { Produto } from '../../core/entities/produto';

@Injectable()
export class CadastrarProdutoUseCaseImpl implements CadastrarProdutoUseCase {
    constructor(private readonly produtoGateway: ProdutoGateway) {}

    async create(produto: Produto): Promise<Produto> {
        return await this.produtoGateway.create(produto);
    }
}
