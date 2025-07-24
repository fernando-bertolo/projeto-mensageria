import { Body, Controller, Post, Res } from '@nestjs/common';
import { CadastrarProdutoUseCase } from '../../application/usecases/cadastrar-produto.usecase';
import { ProdutoDTO } from './dtos/produto.dto';
import { Produto } from '../../core/entities/produto';
import { Response } from 'express';
import { ProdutoPresenter } from '../presenters/produto.presenter';

@Controller('/api/v1/produtos')
export class ProdutoController {
    constructor(
        private readonly cadastrarProdutoUseCase: CadastrarProdutoUseCase,
    ) {}

    @Post()
    async cadastrarProduto(
        @Body() produto: ProdutoDTO,
        @Res() response: Response,
    ) {
        const produtoCriado: Produto =
            await this.cadastrarProdutoUseCase.create(
                Produto.create(produto.nome, produto.preco, produto.descricao),
            );

        response.status(201).send(ProdutoPresenter.toResponse(produtoCriado));
    }
}
