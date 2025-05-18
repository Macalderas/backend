import express from 'express';
import { db } from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM registros ORDER BY id DESC');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { nombre, edad } = req.body;
  await db.query('INSERT INTO registros (nombre, edad) VALUES (?, ?)', [nombre, edad]);
  res.json({ mensaje: 'Registro guardado' });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await db.query('DELETE FROM registros WHERE id = ?', [id]);
  res.json({ mensaje: 'Registro eliminado' });
});

export default router;
