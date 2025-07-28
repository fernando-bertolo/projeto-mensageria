import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Inject,
    Post,
    Res,
    Sse,
} from '@nestjs/common';
import { CadastrarProdutoUseCase } from '../../application/usecases/cadastrar-produto.usecase';
import { ProdutoDTO } from './dtos/produto.dto';
import { Produto } from '../../core/entities/produto';
import { Response } from 'express';
import { ProdutoPresenter } from '../presenters/produto.presenter';
import { BuscarProdutosUseCase } from '../../application/usecases/buscar-produtos.usecase';
import { ClientProxy } from '@nestjs/microservices';
import {
    PRODUCTS_SERVICE,
    PRODUTOS_IMPORTACAO_QUEUE,
} from '../constants/constants';
import { lastValueFrom, Observable, Subject } from 'rxjs';

@Controller('/api/v1/produtos')
export class ProdutoController {
    private readonly streamNotifications = new Subject<ProdutoDTO>();

    constructor(
        @Inject('CadastrarProdutoUseCase')
        private readonly cadastrarProdutoUseCase: CadastrarProdutoUseCase,
        @Inject('BuscarProdutosUseCase')
        private readonly buscarProdutosUseCase: BuscarProdutosUseCase,
        @Inject(PRODUCTS_SERVICE)
        private readonly client: ClientProxy,
    ) {}

    @Get()
    async buscaProdutos(@Res() response: Response) {
        return response
            .status(200)
            .send(await this.buscarProdutosUseCase.buscarProduto());
    }

    @Post()
    @HttpCode(HttpStatus.ACCEPTED)
    async cadastrarProdutos(@Body() produto: ProdutoDTO) {
        await lastValueFrom(
            this.client.emit(PRODUTOS_IMPORTACAO_QUEUE, produto),
        );

        return {
            message: 'Produtos enviados',
        };
    }

    @Sse('/status')
    statusProdutos(): Observable<ProdutoDTO> {
        return this.streamNotifications.asObservable();
    }
}
