export class Produto {
  private id: number | null;
  private nome: string;
  private preco: number;
  private descricao: string;

  private constructor(
    id: number | null,
    nome: string,
    preco: number,
    descricao: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
  }

  public static create(
    id: number | null,
    nome: string,
    preco: number,
    descricao: string,
  ): Produto {
    Produto.validaPreco(preco);
    return new Produto(id, nome, preco, descricao);
  }

  private static validaPreco(preco: number): void {
    if (preco <= 0) {
      throw new Error('Preço inválido');
    }
  }

  public getId(): number | null {
    return this.id;
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
