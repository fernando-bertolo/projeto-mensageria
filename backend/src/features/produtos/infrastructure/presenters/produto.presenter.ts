import { Produto } from '../../core/entities/produto';
import { ProdutoResponseDTO } from '../controllers/dtos/produto-response.dto';

export class ProdutoPresenter {
    static toResponse(produto: Produto): ProdutoResponseDTO {
        const id = produto.getId();
        const idOfuscado = id ? id.substring(0, 4) + '...' : '';
        return new ProdutoResponseDTO(
            idOfuscado,
            produto.getNome(),
            produto.getPreco(),
            produto.getDescricao(),
        );
    }
}
