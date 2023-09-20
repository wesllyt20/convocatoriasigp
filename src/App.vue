<template>
  <div>
    <!-- Página de carga -->
    <!-- <div v-if="isLoading" class="loading-page">
      <img src="https://ultimosismo.igp.gob.pe/img/logo-igp-normal.png" />
      <br />
    </div> -->

    <!-- Contenido principal de la aplicación -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  // Simula una carga demorada (puedes reemplazar esto con tu propia lógica de carga)
  setTimeout(() => {
    // Cambia el valor de isLoading para ocultar la página de carga
    isLoading.value = false;
  }, 500); // Cambia este valor para ajustar la duración de la simulación de carga
});
</script>

<style scoped>
.loading-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8); /* Fondo semi-transparente */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999; /* Asegura que esté encima de otros elementos */
}
</style>
