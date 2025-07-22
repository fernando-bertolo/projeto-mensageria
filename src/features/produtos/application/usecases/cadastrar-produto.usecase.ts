import { Produto } from '../../core/entities/produto';

export interface CadastrarProdutoUseCase {
    create(produto: Produto): Promise<Produto>;
}
