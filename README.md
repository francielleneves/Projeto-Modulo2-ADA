"# Meu Projeto, me chamo Franciele R. Neves, esse é um projeto criado para analisar o nosso conhecimento adquirido no Modulo 2 " 
 Optei por fazer a Opção 1 que é a E-commerce, por ja ser um projeto familiarizado! 

Este projeto em TypeScript simula um sistema de E-commerce, aplicando conceitos de Programação Orientada a Objetos (POO) como encapsulamento, composição e associações entre classes.

## Funcionalidades
- Cliente: cadastra o cliente e gerencia seus pedidos.
- Produto: armazena informações e controla estoque.
- Carrinho: adiciona, remove e lista itens.
- ItemCarrinho: representa um produto no carrinho.
- Pedido: é criado a partir do carrinho e guarda o histórico do cliente.
- Serialização: todas as classes têm método `toJSON()` para simular envio de dados para API.

---

## Decisões de Design
- Encapsulamento: todos os atributos são "private", acessados apenas por métodos públicos (`getters` e `setters`).
- Composição:  
  - Um Carrinho contém vários ItensCarrinho.  
  - Um Pedido contém itens do carrinho.  
 



