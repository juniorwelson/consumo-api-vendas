# Projeto: Consumir API de Vendas

## Descrição
Este projeto é uma aplicação simples em **HTML e JavaScript puro** que consome uma API de vendas e exibe os dados na página.  
Ele faz requisições à API, obtém a lista de vendas e mostra **ID, descrição, valor, forma de pagamento e data** de cada venda de forma organizada.

---

## Funcionalidades
- Buscar dados da API de vendas via `fetch`.
- Listar todas as vendas na página.
- Mostrar informações completas de cada venda:
  - ID da venda
  - Descrição do produto
  - Valor da venda formatado
  - Forma de pagamento
  - Data da venda no formato brasileiro (`pt-BR`)
- Tratamento de erros caso a API não responda ou não haja vendas.

---

## Tecnologias Utilizadas
- HTML5

- JavaScript ES6+ (`fetch`, `async/await`, `forEach`)

---

## Estrutura do Projeto
/projeto-Fecht
|
├── index.html # Página principal
├── script.js # Lógica JavaScript para consumir API




---

## Como Usar
1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/consumir-api-vendas.git
2.Abra o arquivo index.html no navegador.

3.O projeto irá buscar automaticamente os dados da API e exibir as vendas.

##API utilizada

Endpoint: https://sistema-caixa-hyyk.onrender.com/vendas

Retorna um array de objetos com informações de cada venda:

{
  "id": 97,
  "descricao": "1 almoço+suco",
  "valorVenda": "15.98",
  "formaPagamento": "DINHEIRO",
  "datavenda": "2025-09-02T00:25:39.000Z"
}

Autor

Welson Barbosa dos Santos Junior

GitHub: https://github.com/juniorwelson



