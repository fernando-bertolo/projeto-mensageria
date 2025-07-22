import { Produto } from '../../core/entities/produto';
import { ProdutoResponseDTO } from '../controllers/dtos/produto-response.dto';

export class ProdutoPresenter {
    static toResponse(produto: Produto): ProdutoResponseDTO {
        const idOfuscado = produto.getId().substring(0, 4) + '...';
        return new ProdutoResponseDTO(
            idOfuscado,
            produto.getNome(),
            produto.getPreco(),
            produto.getDescricao(),
        );
    }
}
