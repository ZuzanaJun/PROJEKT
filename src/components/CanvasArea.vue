<template>
  <div class="canvas">
    <!-- <img src="/icons/long-arrow-alt-left-solid.svg" alt="arrow left"> 
    <img src="/icons/long-arrow-alt-right-solid.svg" alt="arrow right">-->
    <div class="canvasarea" :style="{background: `url('${selectedBackgroundUrl}')`}">
      <!-- <img
        class="bckg"
       v-bind:src="selectedBackgroundUrl" alt="Pozadí koláže" /> -->
<Moveable
    class="moveable"
    v-bind="moveable"
    @drag="handleDrag"
    @scale="handleScale"
    @rotate="handleRotate"
  
    v-for="cut in cutsOnCanvas"
    v-bind:key="cut.id"

    v-bind:style="{position: 'relative', 'z-index': cut.orderIndex}"

  >
      <img 
        class="cutItem"
        v-bind:src="cut.url" alt="Výstřižek"
        @click="selected = cut.id"

         />
    </Moveable>
    </div>
  </div>
</template>

<script>
import dataBackgrounds from "../dataBackground.js";
import Moveable from "vue-moveable";

export default {
  data() {
    return {
      dataBackgrounds,
      selectedBackgroundId: "1001",
      selectedBackgroundUrl: dataBackgrounds[0].url,
      cutsOnCanvas: [],
      selected: '',
      

      moveable: {
        draggable: true,
        throttleDrag: 0,
        resizable: false,
        throttleResize: 1,
        keepRatio: true,
        scalable: true,
        throttleScale: 0,
        rotatable: true,
        throttleRotate: 0,
        snappable: true,
        pinchable: false, // ["draggable", "resizable", "scalable", "rotatable"]
        origin: false,
        bounds: { left: 100, right: 1000, top: 100, bottom: 700},

      }
    };
  },
  components: {
    Moveable
  },

  mounted() {
    this.$root.$on("selectBackground", this.selectBackround);
    this.$root.$on("addPiece", (cut)=>{this.cutsOnCanvas.push({...cut, orderIndex: 1073741823}), console.log(this.cutsOnCanvas)});
    window.addEventListener('keyup', (e) => { 
          if(e.key === 'Backspace'){
             this.cutsOnCanvas = this.cutsOnCanvas.filter(item => item.id !== this.selected);
              }
          if(e.key === 'ArrowUp'){
            const idx = this.cutsOnCanvas.findIndex(item => item.id === this.selected);
            this.cutsOnCanvas[idx].orderIndex++;
            console.log(idx);
          }     
          if(e.key === 'ArrowDown'){
            const idx = this.cutsOnCanvas.findIndex(item => item.id === this.selected);
            this.cutsOnCanvas[idx].orderIndex--
          }     
              });
    
    

  },

  methods: {
    selectBackround(id) {
      console.log(`Id pozadí je ${id}`);
      const selected = this.dataBackgrounds.find(item => item.id === id);
      this.selectedBackgroundUrl = selected.url;
      console.log(selected);
    },
    handleDrag({ target, transform }) {
      console.log("onDrag left, top", transform);
      target.style.transform = transform;
    },
    handleScale({ target, transform, scale }) {
      console.log("onScale scale", scale);
      target.style.transform = transform;
    },
    handleRotate({ target, dist, transform }) {
      console.log("onRotate", dist);
      target.style.transform = transform;
    }
  }
};
</script>

<style>
.canvas {
  display: flex;
}

.bckg {
  height: 600px;
  width: 900px;
}

.canvasarea {
  position: absolute;
  top: 100px;
  left: 100px;
  /* background-color: silver; */
  background-color: silver;
  height: 600px;
  width: 900px;
  overflow: hidden;

}
.cutItem, .moveable {
  width: 120px;
}
</style>