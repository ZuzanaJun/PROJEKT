<template>
  
      <div class="colors-picker">
      <div
        class="colors-picker__color"
        v-for="color in colors"
        v-bind:key="color.name"
        v-bind:style="{height: `${100 / colors.length}%`}"
        v-on:click="handleClick(color.name)"
      ></div>

        <div 
            class="header__shuffle-btn"
            @click="shuffle"
            >
        </div>  

    </div>
    
</template>

<script>
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

     }
 },
 methods: {
     
    handleClick(name) {
      this.$root.$emit('colorFilter', name);
    },
    addPiece(cut){
      this.$root.$emit('addPiece', cut);
    },
 
    
     shuffle() {
        this.$root.$emit('shuffle');
    }
   }
 
}
</script>

<style>
    .colors-picker {
        height: calc(100vh - 67px);
        width: 35px;
        
        background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,210,0,1) 15%, rgba(56,156,208,1) 32%, rgba(253,104,208,1) 45%, rgba(218,41,0,1) 66%, rgba(253,238,192,1) 83%, rgba(48,48,48,1) 100%);
}

.header__shuffle-btn {
    background: linear-gradient(0deg, rgba(253,238,192,1) 0%, rgba(218,41,0,1) 21%, rgba(253,104,208,1) 45%, rgba(56,156,208,1) 70%, rgba(255,210,0,1) 100%);
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: absolute;
    right: 6px;
    top: 10px;
  

}
</style>