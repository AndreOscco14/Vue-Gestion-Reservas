<template>
  <div>
    <h2>Reservar</h2>
    <form @submit.prevent="crearReserva" class="reservation-form">
      <div class="form-group">
        <label for="nombre">Nombre del cliente:</label>
        <input type="text" id="nombre" v-model="nombreCliente" required class="form-input">
      </div>
      <div class="form-group">
        <label for="personas">Número de personas:</label>
        <input type="number" id="personas" v-model="numeroPersonas" required class="form-input">
      </div>
      <div class="form-group">
        <label for="fecha">Fecha de la reserva:</label>
        <input type="date" id="fecha" v-model="fechaReserva" required class="form-input">
      </div>
      <div class="form-group">
        <label for="hora">Hora de la reserva:</label>
        <input type="time" id="hora" v-model="horaReserva" required class="form-input">
      </div>
      <button type="submit" class="btn-create">Crear reserva</button>
    </form>
  </div>
      <div v-if="mensajeReserva">
        <p>{{ mensajeReserva }}</p>
      </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nombreCliente: '',
      numeroPersonas: null,
      fechaReserva: '',
      horaReserva: '',
      mensajeReserva: '',
    };
  },
  methods: {
    async crearReserva() {
      // Crea un objeto con los datos del formulario
      const reserva = {
        nombreCliente: this.nombreCliente,
        numeroPersonas: this.numeroPersonas,
        fechaReserva: this.fechaReserva,
        horaReserva: this.horaReserva,
      };

      try {
        // Envía la solicitud POST al backend utilizando axios
        const sendBack= await axios.post('http://localhost:3000/api/register', reserva);
        this.mensajeReserva = sendBack.data.message;
        this.resetForm();
        // respuesta del backend
       alert(sendBack.data.message);
      } catch (error) {
        // manejar cualquier error de la solicitud, como mostrar un mensaje de error al usuario
        console.error(error);
      }
    },

// resetear El formulario
    resetForm() {
        this.nombreCliente = '';
        this.numeroPersonas = null;
        this.fechaReserva = '';
        this.horaReserva = '';
        this.mensajeReserva = '';
      },

  },
};
</script>


<style scoped>
.reservation-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-input {
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

.btn-create {
  background-color: #ff8c00;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

h2{
  text-align: center;
  margin: 5%;
}

.btn-create:hover {
  background-color: #ff5722;
}
</style>
