<template>
  <header>
    <nav>
      <router-link to="/create" class="nav-link">Crear Reserva</router-link>
      <router-link to="/read" class="nav-link">Listado Reservas</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 20px;
  margin: 10px;
  font-size: 20px;
}

nav {
  display: flex;
  text-align: center;
}

nav a {
  margin-right: 20px;
  text-decoration: none;
  color: #948f8f;
  transition: color 0.3s; /* Transición de color al pasar el mouse */
}

nav a:hover {
  color: #ff8c00; /* Color al pasar el mouse */
}
</style>
