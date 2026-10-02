# API Express + Sequelize + PostgreSQL

## 1. Pré-requisitos

- Node.js
- PostgreSQL
- npm
- VS Code (opcional)

## 2. Criar o banco

No PostgreSQL, crie o banco:

```sql
CREATE DATABASE "Supermercado";
```

## 3. Instalar dependências

```powershell
npm install
```

## 4. Configurar o .env

Copie `.env.example` para `.env`:

```powershell
Copy-Item .env.example .env
```

Edite `DB_PASSWORD` com a senha do usuário PostgreSQL.

## 5. Executar

Desenvolvimento:

```powershell
npm run dev
```

Produção:

```powershell
npm start
```

A API ficará em:

http://localhost:3000

## 6. Endpoints

| Método | URL | Função |
|---|---|---|
| GET | /usuarios | Lista usuários |
| GET | /usuarios/:id | Busca usuário |
| POST | /usuarios | Cria usuário |
| PUT | /usuarios/:id | Atualiza usuário |
| DELETE | /usuarios/:id | Exclui usuário |

## 7. Exemplos

### POST /usuarios

```json
{
  "nome": "João da Silva",
  "email": "joao@example.com"
}
```

### PUT /usuarios/1

```json
{
  "nome": "João Silva Atualizado",
  "email": "joao.novo@example.com"
}
```

## Observação sobre sequelize.sync()

O projeto usa `sequelize.sync()` para criar a tabela automaticamente durante o aprendizado.

Em produção, prefira migrations do Sequelize para controlar alterações do banco.
