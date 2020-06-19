<template>
  <div class="backgroundPanel">
      <div 
                class="background__item"
                v-for="background in dataBackgrounds"
                v-bind:key="background.id"
            >
            <img v-bind:src="background.url" alt="Pozadí" class="background__img">
        </div>
  </div>
</template>

<script>
import dataBackgrounds from '../dataBackground.js'

export default {

    data() {
        return{
            dataBackgrounds,
        }
    }
}
</script>

<style>
.backgroundPanel{
     display: flex;
     overflow-y: auto;
     flex-direction: column;

     
}
.background__item{
    text-align: right;
}

.background__img{
width: 60%;
margin: 5px; 
}
</style>