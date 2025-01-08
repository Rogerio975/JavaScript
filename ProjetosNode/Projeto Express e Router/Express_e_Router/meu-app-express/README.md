# Meu App Express

Este é um projeto de exemplo utilizando Express.js para criar um aplicativo web simples com três páginas: Início, Contato e Sobre.

## Estrutura do Projeto

```
meu-app-express
├── src
│   ├── app.ts                  # Ponto de entrada da aplicação
│   ├── controllers             # Controladores para gerenciar a lógica das rotas
│   │   ├── homeController.ts   # Controlador para a página inicial
│   │   ├── contactController.ts # Controlador para a página de contato
│   │   └── aboutController.ts   # Controlador para a página sobre
│   ├── routes                  # Definição das rotas
│   │   ├── homeRoutes.ts       # Rotas para a página inicial
│   │   ├── contactRoutes.ts     # Rotas para a página de contato
│   │   └── aboutRoutes.ts      # Rotas para a página sobre
│   └── views                   # Templates EJS para as páginas
│       ├── home.ejs           # Template para a página inicial
│       ├── contact.ejs        # Template para a página de contato
│       └── about.ejs          # Template para a página sobre
├── package.json                # Configuração do npm
├── tsconfig.json              # Configuração do TypeScript
└── README.md                  # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd meu-app-express
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Execução

Para iniciar o servidor, execute o seguinte comando:

```
npm start
```

O aplicativo estará disponível em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie um pull request com suas alterações.