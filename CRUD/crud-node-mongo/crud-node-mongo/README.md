# CRUD Node.js + MongoDB + Joi

API REST de exemplo para gerenciar **Produtos**, usando:

- **Node.js** + **Express** — servidor HTTP e rotas
- **MongoDB** + **Mongoose** — banco de dados e modelagem
- **Joi** — validação dos dados de entrada

## Estrutura do projeto

```
crud-node-mongo/
├── src/
│   ├── config/
│   │   └── database.js          # conexão com o MongoDB
│   ├── models/
│   │   └── Produto.js           # schema Mongoose
│   ├── validations/
│   │   └── produtoValidation.js # schemas Joi (criar, atualizar, listar)
│   ├── middlewares/
│   │   └── validate.js          # middleware genérico de validação
│   ├── controllers/
│   │   └── produtoController.js # lógica das rotas (CRUD)
│   ├── routes/
│   │   └── produtoRoutes.js     # definição das rotas /produtos
│   ├── app.js                   # configuração do Express
│   └── server.js                # inicialização do servidor
├── .env.example
├── package.json
└── README.md
```

## Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Copie o arquivo de variáveis de ambiente e ajuste se necessário:
   ```bash
   cp .env.example .env
   ```

3. Garanta que o MongoDB esteja rodando localmente (ou ajuste `MONGO_URI` no `.env` para apontar para o seu banco, ex: MongoDB Atlas).

4. Inicie o servidor:
   ```bash
   npm start
   ```
   ou, em modo desenvolvimento (com reinício automático):
   ```bash
   npm run dev
   ```

O servidor sobe por padrão em `http://localhost:3000`.

## Endpoints

| Método | Rota            | Descrição                          |
|--------|-----------------|-------------------------------------|
| POST   | `/produtos`      | Cria um novo produto               |
| GET    | `/produtos`      | Lista produtos (paginado)          |
| GET    | `/produtos/:id`  | Busca um produto pelo ID           |
| PUT    | `/produtos/:id`  | Atualiza um produto (parcial ou total) |
| PATCH  | `/produtos/:id`  | Atualiza um produto (parcial)      |
| DELETE | `/produtos/:id`  | Remove um produto                  |

### Exemplo — Criar produto

```bash
curl -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Teclado Mecânico",
    "descricao": "Teclado mecânico switch azul",
    "preco": 249.90,
    "quantidade": 15
  }'
```

### Exemplo — Listar produtos com paginação

```bash
curl "http://localhost:3000/produtos?pagina=1&limite=5&ativo=true"
```

### Exemplo — Atualizar produto

```bash
curl -X PATCH http://localhost:3000/produtos/<ID_DO_PRODUTO> \
  -H "Content-Type: application/json" \
  -d '{ "quantidade": 20 }'
```

### Exemplo — Remover produto

```bash
curl -X DELETE http://localhost:3000/produtos/<ID_DO_PRODUTO>
```

## Validação com Joi

Toda entrada de dados (`body` na criação/atualização e `query` na listagem) passa
pelo middleware `validate`, que:

- Valida o payload contra o schema Joi correspondente.
- Retorna `400` com a lista de mensagens de erro caso algo esteja inválido.
- Remove campos desconhecidos (`stripUnknown: true`).
- Normaliza/preenche valores padrão (ex.: `quantidade` = 0, `ativo` = true).

## Próximos passos sugeridos

- Adicionar autenticação (ex.: JWT) para proteger as rotas.
- Adicionar testes automatizados (Jest + Supertest).
- Adicionar Docker Compose para subir API + MongoDB juntos.
