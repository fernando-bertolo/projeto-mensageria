import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from 'src/features/produtos/core/entities/produto';
import { ProdutoGateway } from 'src/features/produtos/core/gateways/produto.gateway';
import { ProdutoEntity } from '../entities/produto.entity';
import { Repository } from 'typeorm';

export class ProdutoTypeormRepository implements ProdutoGateway {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepository: Repository<ProdutoEntity>,
    ) {}
    async create(produto: Produto): Promise<Produto> {
        const entity = this.produtoRepository.create({
            nome: produto.getNome(),
            preco: produto.getPreco(),
            descricao: produto.getDescricao(),
        });

        const saved = await this.produtoRepository.save(entity);

        produto.setId(saved.id);
        return produto;
    }
}
