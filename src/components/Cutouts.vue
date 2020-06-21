<template>
  <div class="panel">
    <div class="cutouts">
      <div 
        class="cutouts__item" 
        v-for="cut in filteredCutouts" 
        v-bind:key="cut.id"
        @click="addPiece(cut)">
        <img v-bind:src="cut.url" class="cutouts__img" />
      </div>
    </div>

    
  </div>
</template>

<script>
import dataCutouts from "../dataCutouts";
import shuffle from "lodash.shuffle";


export default {
  data() {
    return {
      
      dataCutouts,
      activeFilter: ""
    };
  },

  computed: {
    filteredCutouts() {
      if (this.activeFilter !== "") {
        return this.dataCutouts.filter(item =>
          item.color.includes(this.activeFilter)
        );
      } else {
        return shuffle(this.dataCutouts);
      }
    }
  },
  methods: {
    changeFilter(name) {
      this.activeFilter = name;

    },
    shuffle() {
      this.activeFilter = '';
      this.dataCutouts = shuffle(this.dataCutouts);
    }
  },
  
  
  mounted() {
        this.$root.$on('shuffle', this.shuffle)
        this.$root.$on('colorFilter', this.changeFilter)
  },

  
};
</script>

<style>


.cutouts {
  height: calc(100vh - 67px);
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
}

.panel {
    display: flex;
}

.cutouts::-webkit-scrollbar {
  display: none;
}

.cutouts__item {
  width: 140px;
  height: 150px;
}

.cutouts__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}


</style>