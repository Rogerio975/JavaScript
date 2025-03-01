const express = require('express')
const helmet = require('helmet')

const app = express()

app.use(helmet())

app.get('/', (_request, response) => {
  return response.json({
    api: 'live'
  })
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
  });