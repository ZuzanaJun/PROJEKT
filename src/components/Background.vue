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
  height: calc(100vh - 72px);
  width: 310px;

}

.background::-webkit-scrollbar {
  display: none;
}

.background__item {
  text-align: right;
}

.background__img {
  width: 60%;
  margin: 3px;
  border: 2px solid transparent;
}
.background__img:hover {
border: 2px solid #303030;
box-shadow: 4px 10px 22px 6px rgba(48, 48, 48, 0.75);
}
</style>