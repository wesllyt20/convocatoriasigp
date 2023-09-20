<template>
  <div
    class="grid 4xl:grid-cols-5 3xl:grid-cols-12 2xl:grid-cols-11 xl:grid-cols-9 gap-4"
  >
    <div
      class="4xl:col-span-1 3xl:col-span-3 2xl:col-span-3 xl:col-span-3 space-y-3 pt-3"
    >
      <datosUser></datosUser>
      <accion></accion>
      <div class="space-y-4 px-4 pt-3">
        <CvPdf></CvPdf>
        <CloseSession></CloseSession>
      </div>
    </div>
    <div
      class="4xl:col-span-4 3xl:col-span-9 2xl:col-span-8 xl:grid-cols-6"
    ></div>
  </div>
</template>

<script setup>
import accion from "../../menu/user/postAccion.vue";
import datosUser from "../../menu/user/datosUser.vue";
import CloseSession from "../../menu/user/closeSession.vue";
import CvPdf from "../../menu/user/cvPdf.vue";
</script>
