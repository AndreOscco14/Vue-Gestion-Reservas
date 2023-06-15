const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydatabase.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

// Elimina la tabla `users` si existe
// db.run(`
//   DROP TABLE IF EXISTS users;
// `, (err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log('Table "users" dropped.');
//   }
// });


// Añade la columna `nombreCliente` a la tabla `users`
// db.run(`
//   ALTER TABLE users ADD COLUMN nombreCliente TEXT NOT NULL;
// `, (err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log('Column "nombreCliente" added.');
//   }
// });

// Crea la tabla `users`
db.run(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombreCliente TEXT NOT NULL,
    numeroPersonas INTEGER NOT NULL,
    fechaReserva TEXT NOT NULL,
    horaReserva TEXT NOT NULL
  );
`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Table "users" created.');
  }
});

module.exports = db
