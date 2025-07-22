export class Produto {
    private id: string;
    private nome: string;
    private preco: number;
    private descricao: string;

    private constructor(nome: string, preco: number, descricao: string) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }

    public static create(
        nome: string,
        preco: number,
        descricao: string,
    ): Produto {
        Produto.validaPreco(preco);
        return new Produto(nome, preco, descricao);
    }

    private static validaPreco(preco: number): void {
        if (preco <= 0) {
            throw new Error('Preço inválido');
        }
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getDescricao(): string {
        return this.descricao;
    }
}
