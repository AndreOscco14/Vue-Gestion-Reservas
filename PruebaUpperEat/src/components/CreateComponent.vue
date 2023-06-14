<template>
  <div>
    <h2>Crear una reserva</h2>
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
</template>

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

.btn-create:hover {
  background-color: #ff5722;
}
</style>
