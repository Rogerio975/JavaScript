const express = require('express')
const helmet = require('helmet')
const port = 3000

const app = express()

app.use(helmet())

app.get('/', (_request, response) => {
  return response.json({
    api: 'live'
  })
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });