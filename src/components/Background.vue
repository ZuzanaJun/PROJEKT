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
        }
    }
};
</script>

<style>
.background {
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  height: 100vh;
  width: 310px;

}
.background__item {
  text-align: right;
}

.background__img {
  width: 60%;
  margin: 5px;
}
</style>