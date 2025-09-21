import { Produto } from "./Produto";

export class ItemCarrinho {
  private produto: Produto;
  private quantidade: number;

  constructor(produto: Produto, quantidade: number) {
    this.produto = produto;
    this.quantidade = quantidade > 0 ? quantidade : 1;
  }

  public getProduto(): Produto {
    return this.produto;
  }

  public getQuantidade(): number {
    return this.quantidade;
  }

  public getSubtotal(): number {
    return this.produto.getPreco() * this.quantidade;
  }

  public toJSON() {
    return {
      produto: this.produto.toJSON(),
      quantidade: this.quantidade,
      subtotal: this.getSubtotal()
    };
  }
}
