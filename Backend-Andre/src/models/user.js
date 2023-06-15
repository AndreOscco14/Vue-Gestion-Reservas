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

// Se añade la columna ESTADO
// db.run(`
//   ALTER TABLE users ADD COLUMN estado TEXT;
// `, (err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log('Column "estado" added.');
//   }
// });

// db.run(`
//   CREATE TABLE reserva_estado (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     reserva_id INTEGER,
//     estado TEXT NOT NULL,
//     fecha_actualizacion TEXT NOT NULL,
//     FOREIGN KEY(reserva_id) REFERENCES users(id)
//   );
// `, (err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log('Table "reserva_estado" created.');
//   }
// });

module.exports = db
