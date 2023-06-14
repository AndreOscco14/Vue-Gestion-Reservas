// router.js o router/index.js

import { createRouter, createWebHistory } from 'vue-router'

import CreateComponent from './components/CreateComponent.vue'
import ReadComponent from './components/ReadComponent.vue'
import UpdateComponent from './components/UpdateComponent.vue'
import DeleteComponent from './components/DeleteComponent.vue'

// Definir rutas
const routes = [
  { path: '/create', component: CreateComponent },
  { path: '/read', component: ReadComponent },
  { path: '/update', component: UpdateComponent },
  { path: '/delete', component: DeleteComponent },
]

// Crear una instancia de router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
