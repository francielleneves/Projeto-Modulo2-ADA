import { Produto } from "./Produto";
import { Cliente } from "./Cliente";


const produto1 = new Produto(1, "Notebook", 5500, 5);
const produto2 = new Produto(2, "Mouse", 150, 10);
const produto3 = new Produto(3, "Teclado", 230, 3);


const cliente = new Cliente(1, "Franciele");


console.log(cliente.getCarrinho().adicionarProduto(produto1, 1));
console.log(cliente.getCarrinho().adicionarProduto(produto2, 2));
console.log(cliente.getCarrinho().adicionarProduto(produto3, 5)); // estoque insuficiente
console.log(cliente.getCarrinho().removerProduto(3)); // não existe


cliente.getCarrinho().listarItens();


console.log(cliente.finalizarCompra());


console.log(cliente.finalizarCompra());
