const { Router } = require('express');
const router = Router();

const db = require('../models/user');


//*----------------------- Registrarse SQLite---------------------------
router.post('/register', (req, res) => {
  const { nombreCliente, numeroPersonas, fechaReserva, horaReserva } = req.body;
    const sql = 'INSERT INTO users  (nombreCliente, numeroPersonas, fechaReserva, horaReserva) VALUES (?, ?, ?, ?)';
    const values = [nombreCliente, numeroPersonas, fechaReserva, horaReserva];
  
    db.run(sql, values, function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Error al guardar la reserva' });
      }
      // Envía una respuesta con éxito al fronted
      res.json({ message: 'Reserva guardada correctamente' });
    });
  });


//* ------------------------- Enviar datos Usuarios al Front ---------------------------
router.get('/reservas', (req, res) => {
  const sql = 'SELECT * FROM users';

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Error al obtener las reservas' });
    }

    res.json(rows);
  });
});

//* ------------------------- Actualizar Estados ---------------------------
router.put('/reservas/:id', (req, res) => {
  const id = req.params.id;
  const nuevoEstado = req.body;
  console.log(id);
  // Actualiza el estado en la tabla `users`
  db.run('UPDATE users SET estado = ? WHERE id = ?', [nuevoEstado, id], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Error al actualizar el estado de la reserva' });
    } else {
      res.json({ message: 'Estado de la reserva actualizado exitosamente' });
    }
  });
});

//* ------------------------- ELIMINAR Estados ---------------------------
router.delete('/reservasDelete/:id', (req, res) => {
  const id = req.params.id;
  // Realiza la operación de eliminación en la base de datos usando el ID
  db.run('DELETE FROM users WHERE id = ?', id, function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error al eliminar el registro');
    } else {
      console.log(`Registro eliminado con ID: ${id}`);
      res.status(200).send('Registro eliminado correctamente');
    }
  });
});

module.exports = router
