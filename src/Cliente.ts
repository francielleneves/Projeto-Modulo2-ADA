import { Carrinho } from "./Carrinho";
import { Pedido } from "./Pedido";

export class Cliente {
  private id: number;
  private nome: string;
  private carrinho: Carrinho;
  private pedidos: Pedido[] = [];

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
    this.carrinho = new Carrinho();
  }

  public getNome(): string {
    return this.nome;
  }

  public getCarrinho(): Carrinho {
    return this.carrinho;
  }

  public finalizarCompra(): string {
    if (this.carrinho.getItens().length === 0) return "Carrinho vazio!";
    const pedido = new Pedido(this.carrinho);
    this.pedidos.push(pedido);
    this.carrinho = new Carrinho(); 
    pedido.resumo();
    return "Compra finalizada com sucesso!";
  }

  public toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      pedidos: this.pedidos.map(p => p.toJSON())
    };
  }
}
