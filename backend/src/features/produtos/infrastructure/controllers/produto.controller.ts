import { Body, Controller, Get, Inject, Post, Res } from '@nestjs/common';
import { CadastrarProdutoUseCase } from '../../application/usecases/cadastrar-produto.usecase';
import { ProdutoDTO } from './dtos/produto.dto';
import { Produto } from '../../core/entities/produto';
import { Response } from 'express';
import { ProdutoPresenter } from '../presenters/produto.presenter';
import { BuscarProdutosUseCase } from '../../application/usecases/buscar-produtos.usecase';

@Controller('/api/v1/produtos')
export class ProdutoController {
    constructor(
        @Inject('CadastrarProdutoUseCase')
        private readonly cadastrarProdutoUseCase: CadastrarProdutoUseCase,
        @Inject('BuscarProdutosUseCase')
        private readonly buscarProdutosUseCase: BuscarProdutosUseCase
    ) {}

    @Get()
    async buscaProdutos(
        @Res() response: Response,
    ) {
        return response.status(200).send(await this.buscarProdutosUseCase.buscarProduto());
    }

    @Post()
    async cadastrarProduto(
        @Body() produto: ProdutoDTO,
        @Res() response: Response,
    ) {
        const produtoCriado: Produto =
            await this.cadastrarProdutoUseCase.create(
                Produto.create(null, produto.nome, produto.preco, produto.descricao),
            );

        response.status(201).send(ProdutoPresenter.toResponse(produtoCriado));
    }
}
