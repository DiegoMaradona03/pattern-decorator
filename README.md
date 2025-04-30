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
- Node.js (Framework)
- VsCode (IDE)
- Insomnia (IDE de testes)
- Prisma (ORM)
- XAMPP (IDE) SGBD MySQL

## Passo a Passo de como executar a API
- 1 Clone este repositório
- 2 Abrir com Vscode
- 3 Criar o arquivo .env na pasta API contendo:
```
DATABASE_URL="mysql://root@localhost:3306/hamburgueria"
```
- Obs: certifique-se de não ter um banco de dados chamado hamburgueria no seu MySQL.
- 4 Abrir o XAMPP e dar start em MySQL
- 5 No VsCode abra um terminal CTRL + ' cmd ou bash e digite os seguintes comandos para baixar as dependências e instalar o Banco de dados
```
cd api
npm install
npm i prisma -g
npx prisma migrate dev --name init
npx nodemon
# ou
npm start
```
- 6 Abra o Insomnia e importe o arquivo ./docs/insomnia.yaml para realizar os testes.
