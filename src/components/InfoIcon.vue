<template>
  <div class="icon">
      <img src="/icons/info.svg" alt="info" class="infoIcon">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.infoIcon {
    position: absolute;
    bottom: 15px;
    left: 15px;
    width: 40px;
}

.infoIcon:hover {
  transform: scale(1.1);
}

.infoIcon {
  
  transition: transform 0.3s ease-in-out;
}


</style>