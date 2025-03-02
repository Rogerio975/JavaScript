const express = require('express')
const helmet = require('helmet')
const port = 3000

const app = express()

app.use(helmet())

app.get('/', (_request, response) => {
  response.setHeader('Content-Type', 'text/html');
  return response.send(`
    <html>
      <body style="background-color: lightblue; color: white; font-family: Arial, sans-serif;">
        <pre>${JSON.stringify({ api: 'live' }, null, 2)}</pre>
      </body>
    </html>
  `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });