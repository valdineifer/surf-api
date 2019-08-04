# Surf API

## Implementação
* NodeJS
* Express
* MariaDB + Sequelize

## Documentação

### GET `/surfistas?pais=[pais]`
* Filtro por país: substituindo `[pais]` pelo país desejado.
#### Response: `200` + Lista de todos os surfistas

### POST `/surfistas`
#### Response: `200` + Surfista criado

### PUT `/surfistas/:numero`
#### Body Request:
```json
{
  "nome": "String",
  "pais": "String"
}
```
#### Response: `200` + Surfista atualizado (se existir)

### DELETE `/surfistas/:numero`
#### Response: `204`

---

### GET `/baterias`
#### Response: `200` + Lista de todas as baterias

### POST `/baterias`
#### Body Request:
```json
{
  "surfista1_id": "Integer",
  "surfista2_id": "Integer"
}
```
#### Response: `200` + Surfista criado