import { ItemCarrinho } from "./ItemCarrinho";
import { Produto } from "./Produto";

export class Carrinho {
  private itens: ItemCarrinho[] = [];

  public adicionarProduto(produto: Produto, qtd: number): string {
    if (qtd <= 0) return "Quantidade inválida!";
    if (qtd > produto.getEstoque()) return "Não há estoque suficiente.";

    this.itens.push(new ItemCarrinho(produto, qtd));
    return `✅ Produto ${produto.getNome()} adicionado com sucesso!`;
  }

  public removerProduto(id: number): string {
    const index = this.itens.findIndex(i => i.getProduto().getId() === id);
    if (index === -1) return "Produto não encontrado no carrinho.";
    this.itens.splice(index, 1);
    return "✅ Produto removido do carrinho.";
  }

  public calcularTotal(): number {
    return this.itens.reduce((acc, item) => acc + item.getSubtotal(), 0);
  }

  public listarItens(): void {
    console.log("🛒 Itens no carrinho:");
    this.itens.forEach(item => {
      console.log(
        `- ${item.getProduto().getNome()} | ${item.getQuantidade()} x R$${item
          .getProduto()
          .getPreco()
          .toFixed(2)} = R$${item.getSubtotal().toFixed(2)}`
      );
    });
    console.log(`TOTAL: R$${this.calcularTotal().toFixed(2)}\n`);
  }

  public getItens(): ItemCarrinho[] {
    return this.itens;
  }

  public toJSON() {
    return this.itens.map(item => item.toJSON());
  }
}
