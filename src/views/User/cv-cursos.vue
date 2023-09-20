<template>
  <div>
    <div class="bg-white 2xl:px-[4rem] xl:px-[3rem] mt-2">
      <headerUser></headerUser>
    </div>
    <div class="bg-[#F5FAFF]">
      <div class="p-1 px-5 w-full h-full"><cvCursos></cvCursos></div>
      <br />
    </div>
  </div>
</template>

<script setup>
import headerUser from "@layout/toolbar/headerUser.vue";
import cvCursos from "@layout/section/user/cvCursos.vue";
</script>

<style></style>
