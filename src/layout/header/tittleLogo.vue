<template>
  <div id="contHeaderTittle" class="heLogo">
    <img
      id="minamlog"
      class="flex justify-start"
      src="/media/logo/logo_minAmbiente.png"
      alt=""
    />
    <img id="igplog" src="/media/logo/logo_igp.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "TittleLogo",
};
</script>

<style>
#contHeaderTittle {
  display: flex;
  align-items: center;
  height: 80px;
  background: #ffffff;
  left: 0px;
  top: 0px;
}

#minamlog {
  height: 40px;
  margin-right: 20px;
}

#igplog {
  height: 36px;
}
</style>
