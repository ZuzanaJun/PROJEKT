<template>
  <div class="panel">
    <div class="cutouts">
      <div 
        class="cutouts__item" 
        v-for="cut in filteredCutouts" 
        v-bind:key="cut.id"
        @click="addPiece(cut)">
         <drag 
        class="cut-item"
        :transfer-data="{...cut, offsetX, offsetY}"
       >
          <img v-bind:src="cut.url" class="cutouts__img" @mousedown="handleClickOnDrag"/>
       </drag>

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
      activeFilter: "",
      offsetX: 0,
      offsetY: 0
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
    },
    handleClickOnDrag(e) {
      const el = e.target.getBoundingClientRect();
      console.log(e, el);
      console.log(e.x - el.x);
      this.offsetX = e.x - el.x;
      this.offsetY = e.y - el.y;
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
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

.cut-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>