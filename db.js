import mysql from 'mysql2/promise';

export const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2014', // <-- cambia esto
  database: 'registro_app'
});
