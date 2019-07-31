# Surf API

## Funcionalidades
* [x] Inserir e excluir surfistas
* [ ] Alterar nome e país de um surfista
* [x] Obter todos os surfistas cadastrados
* [x] Obter todos os surfistas de determinado país
* [x] Criar novas baterias
* [ ] Cadastrar novas ondas em uma bateria
* [ ] Cadastrar novas notas em uma onda
* [ ] Obter o vencedor de uma bateria

## Regras de Negócio
* [ ] Uma Nota consiste na média aritmética das 3 notas parciais que a compõem
* [ ] O vencedor de uma Bateria é o Surfista cuja soma das duas maiores Notas for superior à do outro

## Requisitos
* Todas as funcionalidades devem ser implementadas sob o paradigma Rest, pfv...
* O banco de dados é da sua escolha (MySQL, PostgreSQL etc.), use o que você achar melhor
* Já seu código vai ter que ser na plataforma NodeJS, foi mal, mas é importante...
* Qualquer framework para NodeJS (Express, Loopback, GraphQL, Sequelize etc.) pode ser usado, se jogue!

## Opcionais
* [ ] Adicionar escopos para queries/models, ver [documentação](https://sequelize.org/master/manual/scopes.html).