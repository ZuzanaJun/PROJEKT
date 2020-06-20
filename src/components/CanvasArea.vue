<template>
  <div class="canvas">
    <!-- <img src="/icons/long-arrow-alt-left-solid.svg" alt="arrow left"> 
    <img src="/icons/long-arrow-alt-right-solid.svg" alt="arrow right">-->
 <drop @drop="handleDrop">
    <div class="canvasarea" :style="{background: `url('${selectedBackgroundUrl}')`}">
      <!-- <img
        class="bckg"
      v-bind:src="selectedBackgroundUrl" alt="Pozadí koláže" />-->
      <Moveable
        @renderEnd="renderEnd"
        class="moveable"
        v-bind="getConfig(selected === cut.id)"
        @drag="handleDrag"
        @scale="handleScale"
        @rotate="handleRotate"
        v-for="cut in cutsOnCanvas"
        v-bind:key="cut.id"
        v-bind:style="{position: 'absolute', 'z-index': cut.orderIndex, transform: cut.transform}"
      >
        <img class="cutItem" v-bind:src="cut.url" alt="Výstřižek" @mousedown="selected = cut.id" />
      </Moveable>
    </div>
  </drop>
  </div>
</template>

<script>
import dataBackgrounds from "../dataBackground.js";
import Moveable from "vue-moveable";
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      dataBackgrounds,
      selectedBackgroundId: "1001",
      selectedBackgroundUrl: dataBackgrounds[0].url,
      cutsOnCanvas: [],
      selected: "",
    };
  },
  components: {
    Moveable
  },

  mounted() {
     if(this.$route.params.id !== undefined){
          const storageData = window.localStorage.getItem('boards');
          console.log(storageData);
          const parsedData = JSON.parse(storageData);
          this.cutsOnCanvas = parsedData;
        };
    this.$root.$on("selectBackground", this.selectBackround);
    this.$root.$on('saveData', this.saveData)
    this.$root.$on("addPiece", cut => {
      
        console.log(this.cutsOnCanvas);
    });
    window.addEventListener("keyup", e => {
      if (e.key === "Backspace") {
        this.cutsOnCanvas = this.cutsOnCanvas.filter(
          item => item.id !== this.selected
        );
      }
      if (e.key === "ArrowUp") {
        const idx = this.cutsOnCanvas.findIndex(
          item => item.id === this.selected
        );
        this.cutsOnCanvas[idx].orderIndex++;
        console.log(idx);
      }
      if (e.key === "ArrowDown") {
        const idx = this.cutsOnCanvas.findIndex(
          item => item.id === this.selected
        );
        this.cutsOnCanvas[idx].orderIndex--;
      }
    });
  },

  methods: {
    saveData(){
      console.log(JSON.stringify(this.cutsOnCanvas));
      window.localStorage.setItem('boards', JSON.stringify(this.cutsOnCanvas));
    },
    getConfig(enabled){
      if (enabled){
        return {
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
        bounds: { left: 100, right: 1000, top: 100, bottom: 700 }
        };
      }
        return { zoom: 0};
      },

    selectBackround(id) {
      console.log(`Id pozadí je ${id}`);
      const selected = this.dataBackgrounds.find(item => item.id === id);
      this.selectedBackgroundUrl = selected.url;
      console.log(selected);
    },
    handleDrag({ target, transform }) {
      console.log("onDrag left, top", transform);
      target.style.transform = transform;
      const idxCut = this.cutsOnCanvas.findIndex( item => item.id === this.selected);
      this.cutsOnCanvas[idxCut].transform = transform;
    },
    handleScale({ target, transform, scale }) {
      console.log("onScale scale", scale);
      target.style.transform = transform;
      const idxCut = this.cutsOnCanvas.findIndex( item => item.id === this.selected);
      this.cutsOnCanvas[idxCut].transform = transform;
    
    },
    handleRotate({ target, dist, transform }) {
      console.log("onRotate", dist);
      target.style.transform = transform;
      const idxCut = this.cutsOnCanvas.findIndex( item => item.id === this.selected);
      this.cutsOnCanvas[idxCut].transform = transform;
    },
    handleDrop(data, event) {
        this.cutsOnCanvas.push(
          { ...data, orderIndex: 1073741823, id: uuidv4(),
           transform: `translate(${event.clientX - data.offsetX - 100}px, ${event.clientY - data.offsetY - 100}px)`, }
          );
    
      },
      renderEnd(){
        console.log(this.cutsLocation)
      }
  },
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
  background-color: silver;
  height: 600px;
  width: 900px;
  overflow: hidden;
  box-shadow: 10px 10px 24px -5px rgba(43, 43, 43, 0.85);

}
.cutItem,
.moveable {
  width: 120px;
}
</style>