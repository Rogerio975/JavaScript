# Basic REST API com Node.js e Express

Projeto exemplo com uma API REST básica que implementa métodos HTTP padrão para o recurso `items`.

Instalação

```powershell
cd "c:\Users\e144231-adm\AnaliseSistemas\JavaScript\node"
npm install
```

Executar

```powershell
npm start
# ou em desenvolvimento com reload automático (se tiver nodemon instalado globalmente)
npm run dev
```

Exemplos (PowerShell)

GET todos os itens:

```powershell
Invoke-RestMethod -Method Get -Uri http://localhost:3000/items
```

POST criar item:

```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:3000/items -ContentType 'application/json' -Body ('{"name":"Item A","description":"Descrição"}')
```

PUT atualizar item (id = 1):

```powershell
Invoke-RestMethod -Method Put -Uri http://localhost:3000/items/1 -ContentType 'application/json' -Body ('{"name":"Item A atualizado"}')
```

DELETE (id = 1):

```powershell
Invoke-RestMethod -Method Delete -Uri http://localhost:3000/items/1
```

Também funcionam os comandos `curl` em ambientes compatíveis.
