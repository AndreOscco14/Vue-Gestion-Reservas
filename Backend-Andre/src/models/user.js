const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydatabase.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

db.run(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombreCliente TEXT NOT NULL,
    numeroPersonas INTEGER NOT NULL,
    fechaReserva TEXT NOT NULL,
    horaReserva TEXT NOT NULL,
    estado TEXT
  );
`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Table "users" created.');
  }
});

module.exports = db
