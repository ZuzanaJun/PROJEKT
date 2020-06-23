<template>
  <div class="background">
    <div class="background__item" 
        v-for="background in dataBackgrounds" 
        v-bind:key="background.id"
        @click="selectBackground(background.id)"
        >
      <img v-bind:src="background.url" alt="Pozadí" class="background__img" />
    </div>
  </div>
</template>

<script>
import dataBackgrounds from "../dataBackground.js";


export default {
  data() {
    return {
      dataBackgrounds,
    }
  },

  methods: {
      selectBackground(id) {
          this.$root.$emit('selectBackground', id)
      },
     
  },


};
</script>

<style>
.background {
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  height: calc(100vh - 72px);
  width: 300px;

}

.background::-webkit-scrollbar {
  display: none;
}

.background__item {
  text-align: right;
  margin-right: 40px;
  margin-top: 10px;
}

.background__img {
  width: 75%;
  
  border: 2px solid transparent;
}
.background__img:hover {
border: 1px solid #303030;
box-shadow: -3px 5px 17px 4px rgba(0,0,0,0.38);
}
</style>