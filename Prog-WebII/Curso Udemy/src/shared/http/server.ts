import express from 'express';
import cors from 'cors';
import rotas from './rotas';

const app = express();

app.use(cors());
app.use(express.json());

app.use(rotas);

app.listen(3000, () => {
  console.log('server started!');
});
