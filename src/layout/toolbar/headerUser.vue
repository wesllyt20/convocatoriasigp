<template>
  <div class="">
    <nav class="flex justify-between items-center">
      <div class="flex nowrap items-center justify-center">
        <tittleLogo></tittleLogo>
        <h2 class="text-igp-blue pl-5 ml-8 font-light mt-1">
          Convocatorias <b class="font-semibold">IGP</b>
        </h2>
      </div>
      <userMenu></userMenu>
    </nav>
  </div>
</template>

<script>
import tittleLogo from "../header/tittleLogo.vue";
import userMenu from "../header/userMenu.vue";

export default {
  name: "headerDash",
  components: {
    tittleLogo,
    userMenu,
  },
};
</script>

<style></style>
