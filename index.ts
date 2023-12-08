import express from 'express';
import { calculator, Operation } from './calculator';

const app = express();
const PORT = 3003;
const BASE_URL = `http://localhost:${PORT}`;

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  if (
    !value1 ||
    !value2 ||
    !op ||
    isNaN(Number(value1)) ||
    isNaN(Number(value2))
  )
    res.status(400).send({ error: 'malformatted request' });

  const result = calculator(Number(value1), Number(value2), op as Operation);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(BASE_URL + '/ping');
});
