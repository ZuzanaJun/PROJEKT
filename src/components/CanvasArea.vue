<template>
  <div class="canvas">
  
    <drop @drop="handleDrop">
      <div ref="canvasarea" class="canvasarea" :style="{background: `url('${selectedBackgroundUrl}')`}">
        <div class="no-select" @click="selectNone"></div>

        <Moveable
          ref="moveable"
          class="moveable"
          v-bind="getConfig(selected === cut.id)"
          @drag="handleDrag"
          @scale="handleScale"
          @rotate="handleRotate"
          v-for="cut in cutsOnCanvas"
          v-bind:key="cut.id"
          v-bind:style="{position: 'absolute', 'z-index': cut.orderIndex, transform: cut.transform}"
        >
          <img 
            class="cutItem" 
            v-bind:src="cut.url" 
            alt="Výstřižek" 
            v-on:load="reloadRects" 
            @mousedown="selected = cut.id" 
          />

        </Moveable>
        

      </div>
    </drop>
  </div>
</template>

<script>
import dataBackgrounds from "../dataBackground.js";
import Moveable from "vue-moveable";
import { v4 as uuidv4 } from 'uuid';
import html2canvas from 'html2canvas';

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

      this.$root.$on("bringForward", this.bringForward );
      this.$root.$on("bringBackward", this.bringBackward );
      this.$root.$on("deleteItem", this.deleteItem );
      this.$root.$on("rotateLeft", this.rotateLeft );
      this.$root.$on("rotateRight", this.rotateRight );
      this.$root.$on("resetCanvas", this.resetCanvas );
      this.$root.$on("selectBackground", this.selectBackround);
      this.$root.$on('saveData', this.saveData);


     if(this.$route.params.id !== undefined){
          const storageData = window.localStorage.getItem('boards');

          const parsedData = JSON.parse(storageData);
          if(parsedData && parsedData[this.$route.params.id]){
            this.cutsOnCanvas = parsedData[this.$route.params.id].data;
            this.selectedBackgroundUrl = parsedData[this.$route.params.id].background;
          }

        };




    window.addEventListener("keyup", e => {
      if (e.key === "Delete" || e.key === "Backspace") {
        this.deleteItem();
      }
      if (e.key === "ArrowUp") {
        this.bringForward();
      }
      if (e.key === "ArrowDown") {
        this.bringBackward();
      }
    });
  },

  methods: {
    reloadRects() {
       if (this.$refs.moveable) {
          this.$refs.moveable.forEach(item => {
            item.updateRect();
          })
        }
    },
    resetCanvas(){
      this.cutsOnCanvas = [];
       window.localStorage.removeItem('boards');
    },
    rotateLeft(){
      const regex = /rotate\((.*?)deg\)/;

      if(this.selected){
        const idx = this.cutsOnCanvas.findIndex( item => item.id === this.selected);
        const rotateString = this.cutsOnCanvas[idx].transform.match(regex);
        if(rotateString){
          const rotateData = Number(rotateString[1]);
          this.cutsOnCanvas[idx].transform = this.cutsOnCanvas[idx].transform.replace(`rotate(${rotateString[1]}deg)`, `rotate(${rotateData-30}deg)`);
        } else {
          this.cutsOnCanvas[idx].transform = this.cutsOnCanvas[idx].transform + ' rotate(-30deg)';
        }
      }
    },
    rotateRight(){
      const regex = /rotate\((.*?)deg\)/;
      if(this.selected){
        const idx = this.cutsOnCanvas.findIndex( item => item.id === this.selected);
        const rotateString = this.cutsOnCanvas[idx].transform.match(regex);
        if(rotateString){
          const rotateData = Number(rotateString[1]);
         this.cutsOnCanvas[idx].transform = this.cutsOnCanvas[idx].transform.replace(`rotate(${rotateString[1]}deg)`, `rotate(${rotateData+30}deg)`)
        }  else {
          this.cutsOnCanvas[idx].transform = this.cutsOnCanvas[idx].transform + ' rotate(30deg)';
        }
      }
    },
    bringForward(){
      if(this.selected){

        const idx = this.cutsOnCanvas.findIndex(
          item => item.id === this.selected
        );
        this.cutsOnCanvas[idx].orderIndex++;
      }
    },
    bringBackward(){
      if(this.selected){

        const idx = this.cutsOnCanvas.findIndex(
          item => item.id === this.selected
        );
        this.cutsOnCanvas[idx].orderIndex--;
      }
    },
    deleteItem(){
       if(this.selected){
         this.cutsOnCanvas = this.cutsOnCanvas.filter(
          item => item.id !== this.selected
        );
       }
    },
    selectNone(){
      this.selected = "";
    },


    async saveData(){
/*       prompt('Název koláže');
  */   //   console.log(JSON.stringify(this.cutsOnCanvas));
    const dataObj = window.localStorage.getItem('boards');


    const canvasData = await html2canvas(this.$refs.canvasarea);



     let parsedData = {};

      if (JSON.parse(dataObj)) {
        parsedData = JSON.parse(dataObj);
      }


      parsedData[this.$route.params.id] = {
        data: this.cutsOnCanvas,
        image: canvasData.toDataURL('image/jpeg', 0.5),
        background: this.selectedBackgroundUrl,
        name: new Date().toLocaleString("cs-CZ")
      };

      window.localStorage.setItem('boards', JSON.stringify(parsedData));




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
/*       console.log(`Id pozadí je ${id}`);*/      
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
          { ...data, orderIndex: 1073741823/* +this.cutsOnCanvas.length */, id: uuidv4(),
           transform: `translate(${event.clientX - data.offsetX - 100}px, ${event.clientY - data.offsetY - 100}px)`, }
          );

      },

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
.no-select{
  position: absolute;
  z-index: 0;
  height: 600px;
  width: 900px;
}
</style>