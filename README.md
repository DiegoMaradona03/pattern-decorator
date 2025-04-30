# Projeto Hamburgueria

## Design Patterns Utilizados

### Decorator Pattern (Estrutural)
Utilizado para adicionar funcionalidades extras aos objetos de forma flexível.  
Neste projeto, criamos funções "decoradoras" que **enriquecem os dados dos modelos Cliente, Hamburguer e Pedido** com informações formatadas para exibição no frontend.

- Arquivos em `decorator/`:
  - `cliente.js`: formata nome, telefone e endereço.
  - `hamburguer.js`: transforma ingredientes em array, resume descrição e formata preço.
  - `pedido.js`: formata data, subtotal e gera um resumo do pedido.

Essas funções são usadas nos controllers antes de enviar a resposta da API.

## Tecnologias utilizadas
- Node.js
- VsCode
- XAMPP