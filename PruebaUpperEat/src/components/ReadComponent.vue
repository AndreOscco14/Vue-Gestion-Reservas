<template>
  <div class="box">
    <h2 class="title">Listado de Reservas</h2>
    <div class="reserva-list">
      <div v-for="reserva in reservas.reverse()" :key="reserva.id" class="reserva-item">
        <div class="reserva-info">
          <h3 class="reserva-title">Reserva de:</h3>
          <p class="reserva-data">{{ reserva.nombreCliente }}</p>
        </div>
        <div class="reserva-info">
          <h3 class="reserva-title">Número de personas:</h3>
          <p class="reserva-data">{{ reserva.numeroPersonas }}</p>
        </div>
        <div class="reserva-info">
          <h3 class="reserva-title">Fecha de reserva:</h3>
          <p class="reserva-data">{{ reserva.fechaReserva }}</p>
        </div>
        <div class="reserva-info">
          <h3 class="reserva-title">Hora de reserva:</h3>
          <p class="reserva-data">{{ reserva.horaReserva }}</p>
        </div>
        <div class="reserva-info">
        <h3 class="reserva-title-estado">Estado:</h3>
        <p class="reserva-data-estado">{{ reserva.estado }}</p>
      </div>
        <div class="reserva-info">
          <button class="reserva-button" @click="modificarEstado(reserva)">Modificar Estado</button>
          <button class="reserva-button-eliminar" @click="eliminarReserva(reserva)">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      reservas: [],
    };
  },
  created() {
    this.obtenerReservas();
  },
  methods: {
    async obtenerReservas() {
      try {
        const response = await axios.get('http://localhost:3000/api/reservas');
        this.reservas = response.data;
      } catch (error) {
        console.error(error);
      }
    },

 async modificarEstado(reserva) {
  const nuevoEstado = prompt('Ingrese el nuevo estado de la reserva:');
  if (nuevoEstado) {
    reserva.estado = nuevoEstado;
    try {
      await axios.put(`http://localhost:3000/api/reservas/${reserva.id}`, { estado: nuevoEstado });

      // const index = this.reservas.findIndex(r => r.id === reserva.id);
      // if (index !== -1) {
      //   this.reservas[index].estado = nuevoEstado;
      // }

    } catch (error) {
      console.error(error);
    }
  }
},

  async eliminarReserva(reserva) {
      try {
        await axios.delete(`http://localhost:3000/api/reservasDelete/${reserva.id}`);
    this.obtenerReservas()
      }catch (error) { 
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>

.reserva-data-estado{
  color: red;
}

.box {
  border-radius: 5px;
  padding: 20px;
}

.title {
  color: #8e8e8e;
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.reserva-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.reserva-item {
  flex-basis: calc(33.33% - 10px);
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.reserva-info {
  margin-bottom: 10px;
}

.reserva-title {
  font-weight: bold;
  margin-bottom: 5px;
  color: #a7a3a3;
}

.reserva-data {
  margin: 0;
  color: #777777;
}

.reserva-button-eliminar{
  margin-left: 3%;
   padding: 10px 20px;
  background-color: #c92626;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.reserva-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .reserva-item {
    flex-basis: 100%;
  }
}
</style>
