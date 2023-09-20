<template>
  <nav>
    <div class="flex align-items-center">
      <label class="text-igp-blue"> Inicio</label>
      <div class="mx-3 border-s border-igp-dark-100 h-3" />
      <navBarText href="https://www.youtube.com/"
        >Tipos de convocatorias</navBarText
      >
      <div class="mx-3 border-s border-igp-dark-100 h-3" />
      <!-- Divider -->
      <navBarText href="https://www.youtube.com/">Soporte</navBarText>
      <btnDefault id="btnRegistro" @click="openModal" class="ml-14 text-sm px-5"
        >Ingreso</btnDefault
      >
    </div>
  </nav>
  <div class="absolute">
    <blurmodel :modalOpen="modalOpen" @close-modal="closeModal">
      <registerpanel></registerpanel>
    </blurmodel>
  </div>
</template>

<script>
import navBarText from "../../components/modals/text/navBarText.vue";
import btnDefault from "../../components/modals/buttons/btnDefault.vue";
import registerpanel from "../panels/login.vue";
import blurmodel from "../../components/modals/blurmodel.vue";

export default {
  name: "headerDash",
  components: {
    navBarText,
    btnDefault,
    registerpanel,
    blurmodel,
  },
  data() {
    return {
      modalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
};
</script>
<style>
#totalblur {
  z-index: 10;
}
</style>
