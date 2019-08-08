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

### GET `/baterias/:id/vencedor`
#### Response: `200` + Vencedor da bateria

### POST `/baterias`
#### Body Request:
```json
{
  "surfista1_id": "Integer",
  "surfista2_id": "Integer"
}
```
#### Response: `200` + Bateria criada

---

### GET `/ondas`
#### Response: `200` + Lista de todas as ondas

### POST `/ondas`
#### Body Request:
```json
{
  "bateriaId": "Integer",
  "surfistaId": "Integer"
}
```

---
## Em Implantação

### GET `/notas`
#### Response: `200` + Lista de todas as notas

### POST `/notas`
#### Body Request:
```json
{
  "ondaId": "Integer",
  "notaParcial1": "Float",
  "notaParcial2": "Float",
  "notaParcial3": "Float"
}
```