import { Produto } from "../../core/entities/produto";

export interface BuscarProdutosUseCase {
    buscarProduto(): Promise<Produto[]>;
}
