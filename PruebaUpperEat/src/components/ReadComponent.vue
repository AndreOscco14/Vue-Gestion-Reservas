<template>
  <div class="box">
    <h2 class="title">Listado de Reservas</h2>
    <div class="reserva-list">
      <div v-for="reserva in reservas" :key="reserva.id" class="reserva-item">
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
        <h3 class="reserva-title">Estado:</h3>
        <p class="reserva-data-estado">{{ reserva.estado }}</p>
      </div>
        <div class="reserva-info">
        <label for="nuevoEstado" class="reserva-label">Seleccionar estado:</label>
        <select id="nuevoEstado" v-model="nuevoEstadoSeleccionado" class="reserva-select">
          <option value="Pendiente">Pendiente</option>
          <option value="Confirmada">Confirmada</option>
          <option value="Cancelada">Cancelada</option>
          <option value="Completada">Completada</option>
        </select>
      </div>
        <div class="reserva-info">
          <button class="reserva-button" @click="modificarEstado(reserva)">Actualizar Estado</button>
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
      nuevoEstadoSeleccionado: ''
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
        // LocalStorage
        localStorage.setItem('reservas', JSON.stringify(this.reservas));
      } catch (error) {
        console.error(error);
      }
    },

 async modificarEstado(reserva) {
  // const nuevoEstado = prompt('Ingrese el nuevo estado de la reserva:');
  if (this.nuevoEstadoSeleccionado) {
    reserva.estado = this.nuevoEstadoSeleccionado;
    try {
      await axios.put(`http://localhost:3000/api/reservas/${reserva.id}`, { estado: this.nuevoEstadoSeleccionado });
           localStorage.setItem('reservas', JSON.stringify(this.reservas));
           this.nuevoEstadoSeleccionado = ''
    } catch (error) {
      console.error(error);
    }
  }
},

  async eliminarReserva(reserva) {
      try {
        await axios.delete(`http://localhost:3000/api/reservasDelete/${reserva.id}`);
          this.obtenerReservas();
         localStorage.setItem('reservas', JSON.stringify(this.reservas));
      }catch (error) { 
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>

.reserva-data-estado{
  color: rgb(220, 165, 14);
  font-size: 20px;
}

.box {
  border-radius: 5px;
  padding: 20px;
}

.title {
  color: #f0ebeb;
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
  color: #e1dede;
}

.reserva-data {
  margin: 0;
  color: #bab8b8;
}

.reserva-button-eliminar{
  margin-left: 3%;
   padding: 10px 20px;
  background-color: #b23333;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.reserva-label {
  font-weight: bold;
  margin-right: 10px;
  color: #a7a3a3;
}

.reserva-select {
  padding: 5px;
  border-radius: 5px;
}



.reserva-button {
  padding: 10px 20px;
  background-color: #2e6fd0;
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
