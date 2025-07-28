import { Controller, Inject, Logger } from '@nestjs/common';
import { CadastrarProdutoUseCase } from '../../application/usecases/cadastrar-produto.usecase';
import { ProdutoDTO } from './dtos/produto.dto';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import {
    PRODUCTS_SERVICE,
    PRODUTOS_IMPORTACAO_QUEUE,
    STATUS_PRODUTOS_QUEUE,
} from '../constants/constants';
import { Produto } from '../../core/entities/produto';
import { Subject } from 'rxjs';

@Controller('/api/v1/produtos-consumer')
export class ProdutoConsumerController {
    private logger: Logger = new Logger(ProdutoConsumerController.name);
    private readonly streamProducts = new Subject<ProdutoDTO>();

    constructor(
        @Inject('CadastrarProdutoUseCase')
        private readonly cadastrarProdutoUseCase: CadastrarProdutoUseCase,
        @Inject(PRODUCTS_SERVICE)
        private readonly client: ClientProxy,
    ) {}

    @MessagePattern(PRODUTOS_IMPORTACAO_QUEUE)
    async processarProdutos(@Payload() produto: ProdutoDTO) {
        const produtoCriado: Produto =
            await this.cadastrarProdutoUseCase.create(
                Produto.create(
                    null,
                    produto.nome,
                    produto.preco,
                    produto.descricao,
                ),
            );

        this.client.emit(STATUS_PRODUTOS_QUEUE, produtoCriado);
        this.logger.log(`Produto criado: ${produtoCriado.getNome()}`);
    }

    @MessagePattern(STATUS_PRODUTOS_QUEUE)
    processaStatus(@Payload() produto: ProdutoDTO) {
        this.streamProducts.next(produto);
        this.logger.log(`Status do produto: ${produto.nome}`);
    }
}
