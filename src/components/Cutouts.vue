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

    <div class="colors-picker">
      <div
        class="colors-picker__color"
        v-for="color in colors"
        v-bind:key="color.name"
        v-bind:style="{height: `${100 / colors.length}%`}"
        v-on:click="handleClick(color.name)"
      ></div>
    </div>
  </div>
</template>

<script>
import dataCutouts from "../dataCutouts";
import shuffle from "lodash.shuffle";

export default {
  data() {
    return {
      colors: [
        { name: "black", display: "#303030" },
        { name: "beige", display: "#FDEEC0" },
        { name: "red", display: "#DA2900" },
        { name: "pink", display: "#FD68D0" },
        { name: "blue", display: "#389cd0" },
        { name: "yellow", display: "#FFD200" },
        { name: "white", display: "#fff" }
      ],
      dataCutouts,
      activeFilter: "",
      offsetX: 0,
      offsetY: 0
    };
  },
  methods: {
    handleClick(name) {
      this.activeFilter = name;
    },
    addPiece(cut){
      this.$root.$emit('addPiece', cut);
    },
    shuffle() {
      this.activeFilter = "";
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
  }
};
</script>

<style>
.colors-picker {
  height: calc(100vh - 67px);
  width: 35px;
  
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,210,0,1) 15%, rgba(56,156,208,1) 32%, rgba(253,104,208,1) 45%, rgba(218,41,0,1) 66%, rgba(253,238,192,1) 83%, rgba(48,48,48,1) 100%);
}

.cutouts {
  height: calc(100vh - 67px);
  width: 310px;
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
/*   object-fit: contain;
 */  object-position: center;
}

.cut-item{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>