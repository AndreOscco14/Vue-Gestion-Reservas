const { Router } = require('express');
const router = Router();

const db = require('../models/user');


//*----------------------- Registrarse SQLite---------------------------
router.post('/register', (req, res) => {
  const { nombreCliente, numeroPersonas, fechaReserva, horaReserva } = req.body;
    console.log("DATOS DeL FRONT:" , req.body);
    const sql = 'INSERT INTO users  (nombreCliente, numeroPersonas, fechaReserva, horaReserva) VALUES (?, ?, ?, ?)';
    const values = [nombreCliente, numeroPersonas, fechaReserva, horaReserva];
  
    db.run(sql, values, function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Error al guardar la reserva' });
      }
      // Envía una respuesta con éxito
      res.json({ message: 'Reserva guardada correctamente' });
    });
  });
//* ------------------------- Enviar datos Usuarios al Front ---------------------------

  
module.exports = router
