# Servidor de Backup

Servidor de backup em Node.js para upload, download, listagem e remoção de arquivos via API REST.

## Funcionalidades
- Upload de arquivos
- Download de arquivos
- Listagem de arquivos
- Remoção de arquivos

## Como executar
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor:
   ```sh
   npm start
   ```

Os arquivos enviados serão salvos na pasta `backups`.

## Rotas
- `POST /upload` — Upload de arquivo
- `GET /files` — Listar arquivos
- `GET /files/:filename` — Download de arquivo
- `DELETE /files/:filename` — Remover arquivo
