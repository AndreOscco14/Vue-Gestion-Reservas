<template>
  <header>
    <nav>
      <router-link to="/create" class="nav-link">Crear</router-link>
      <router-link to="/read" class="nav-link">Leer</router-link>
      <router-link to="/update" class="nav-link">Actualizar</router-link>
      <router-link to="/delete" class="nav-link">Eliminar</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 20px;
  margin: 10px;
}

nav {
  display: flex;
  justify-content: space-between;
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
