import { Carrinho } from "./Carrinho";

export class Pedido {
  private static contadorId = 1;
  private id: number;
  private data: Date;
  private itens: any[];
  private total: number;

  constructor(carrinho: Carrinho) {
    this.id = Pedido.contadorId++;
    this.data = new Date();
    this.itens = carrinho.getItens().map(i => i.toJSON());
    this.total = carrinho.calcularTotal();
  }

  public resumo(): void {
    console.log(`📦 Pedido #${this.id} (${this.data.toLocaleDateString()})`);
    console.log("Itens:", this.itens);
    console.log(`TOTAL: R$${this.total.toFixed(2)}\n`);
  }

  public toJSON() {
    return {
      id: this.id,
      data: this.data,
      itens: this.itens,
      total: this.total
    };
  }
}
