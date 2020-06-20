<template>
  <div class="canvas"> 
    <!-- <img src="/icons/long-arrow-alt-left-solid.svg" alt="arrow left"> 
    <img src="/icons/long-arrow-alt-right-solid.svg" alt="arrow right">  -->
    <div class="canvasarea">
      <img v-bind:src="selectedBackgroundUrl" alt="Pozadí koláže">

    </div>
  </div>  
</template>

<script>
import dataBackgrounds from "../dataBackground.js";

export default {
  data() {
    return {
      dataBackgrounds,
      selectedBackgroundId: '1001',
      selectedBackgroundUrl: dataBackgrounds[0].url,

    }
  },

 mounted() {
        this.$root.$on('selectBackground', this.selectBackround)
  },

  methods: {
        selectBackround(id) {
            console.log(`Id pozadí je ${id}`);
            const selected = this.dataBackgrounds.find(item => item.id === id);
            this.selectedBackgroundUrl = selected.url;
            console.log(selected);

        }
    }
}
</script>

<style>
.canvas {
  display: flex;
  
}

.canvas img{
  height: 600px;
  width: 900px;

}

.canvasarea{
  position: absolute;
  top: 100px;
  left: 100px;
  /* background-color: silver; */

    /* width: 60vw;
    height: 80vh;
    opacity: 0.6;
    margin: 30px 100px; */

    /* border: 2px solid black; */
    /* flex: 1 0 auto; */
    
}


</style>