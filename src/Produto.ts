export class Produto {


  private id: number;
  private nome: string;
  private preco: number;
  private estoque: number;

  

  constructor(id: number, nome: string, preco: number, estoque: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque >= 0 ? estoque : 0;
  }

  public getId(): number {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public getPreco(): number {
    return this.preco;
  }

  public getEstoque(): number {
    return this.estoque;
  }

  public baixarEstoque(qtd: number): string {
    if (qtd <= 0) return "Quantidade inválida!";
    if (qtd > this.estoque) return "Estoque insuficiente!";
    this.estoque -= qtd;
    return `✅ Estoque atualizado: ${this.estoque} unidades restantes.`;
  }

  public toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      preco: this.preco,
      estoque: this.estoque
    };
  }
}
