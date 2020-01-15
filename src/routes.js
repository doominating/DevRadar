const { Router } = require('express');

const routes = Router();

// Tipos de parâmetros:
// Query Params: request.query
// Route Params: request.params
// Body: request.body

routes.post('/users', (request, response) => {
  console.log(request.body);

  return response.json({ message: 'hello world' });
});

module.exports = routes;
