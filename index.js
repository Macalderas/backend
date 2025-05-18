import express from 'express';
import cors from 'cors';
import registrosRouter from './routes/registros.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/registros', registrosRouter);

app.listen(3000, () => {
  console.log('Servidor backend corriendo en http://localhost:3000');
});
