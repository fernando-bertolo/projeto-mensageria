import { Produto } from '../entities/produto';

export interface ProdutoGateway {
    create(produto: Produto): Promise<Produto>;
}
