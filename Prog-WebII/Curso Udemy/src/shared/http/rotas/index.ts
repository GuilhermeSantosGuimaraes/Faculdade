import { Router } from 'express';

const rotas = Router();

rotas.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev!' });
});

export default rotas;
