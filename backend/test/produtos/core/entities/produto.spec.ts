import { Produto } from '@/features/produtos/core/entities/produto';

describe('Produto', () => {
    it('deve criar um produto válido', () => {
        const produto = Produto.create(
            'Produto 1',
            100,
            'Descrição do produto',
        );

        expect(produto.getNome()).toBe('Produto 1');
        expect(produto.getPreco()).toBe(100);
        expect(produto.getDescricao()).toBe('Descrição do produto');
    });

    it('deve lançar erro ao criar produto com preço inválido', () => {
        expect(() => {
            Produto.create('Produto 1', 0, 'Descrição do produto');
        }).toThrow('Preço inválido');

        expect(() => {
            Produto.create('Produto 1', -1, 'Descrição do produto');
        }).toThrow('Preço inválido');
    });

    it('deve definir e retornar o ID corretamente', () => {
        const produto = Produto.create(
            'Produto 1',
            100,
            'Descrição do produto',
        );
        produto.setId('123');

        expect(produto.getId()).toBe('123');
    });
});
