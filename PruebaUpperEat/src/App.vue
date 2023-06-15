<script setup>
import CreateComponentVue from './components/CreateComponent.vue'
import Header from './components/HeaderComponent.vue'
</script>

<template>
 
  <Header />
  <main>
     <router-view></router-view>
   </main>

</template>

<style scoped>
main{
  margin: 5%;
}

</style>
