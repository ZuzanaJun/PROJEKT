<template>
  <div class="edit-buttons">
    <img 
        v-on:click="undoAction"
        src="/icons/undo.png"
        alt="Zpět">
    <img 
        v-on:click="redoAction"
        src="/icons/redo.png" 
        alt="Vpřed">
    <img 
        v-on:click="rotateLeft"
        src="/icons/rotate-left.png" alt="Otočení doleva">
    <img 
         v-on:click="rotateRight"
        src="/icons/rotate-right.png" alt="Otočení doprava">
    <img 
         v-on:click="bringForward"
        src="/icons/arrange-bring-forward.png" alt="Do popředí">
    <img 
        v-on:click="bringBackward"
        src="/icons/arrange-send-backward.png" alt="Do pozadí">
    <!-- <img 
         v-on:click="copyItem"
         src="/icons/content-copy.png" alt="Duplikování"> -->
    <img 
         v-on:click="deleteItem"
         src="/icons/delete.png" alt="Smazání">
    
    <!-- <img src="/icons/sort-up-solid.svg" alt="">
    <img src="/icons/sort-down-solid.svg" alt=""> -->
  </div>
</template>

<script>
export default {

    methods: {
        undoAction(){
            console.log('undo')
        },
        redoAction(){
            console.log('redo')
        },
        rotateLeft(){
           this.$root.$emit('rotateLeft')

        },
        rotateRight(){
           this.$root.$emit('rotateRight')
        },
        bringForward(cutId){
            this.$root.$emit('bringForward')
        },
        bringBackward(){
            this.$root.$emit('bringBackward')
        },      
        deleteItem(){
            console.log('deleteItem')
            this.$root.$emit('deleteItem')
        }
    }
}
</script>

<style>

.edit-buttons {
  /* background-color: burlywood; */
  width: 30px;
  position: absolute;
  top: 100px;
  left: 60px;
}

.edit-buttons img:hover {
  transform: scale(1.1);
}

.edit-buttons img {
  width: 100%;
  transition: transform 0.3s ease-in-out;
}

</style>