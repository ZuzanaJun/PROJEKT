<template>
     <div class="gallery">
        <div class="gallery__item" >
            <img v-bind:src="board.image" alt="Koláž" class="gallery__img" />
            <p class="title__img">název koláže</p>
        </div>
  </div>



  <!-- <div class="gallery__item">
      <img v-bind:src="board.image" alt="Koláž" class="gallery__img" >
  </div> -->
</template>

<script>
export default {
    props: ['board'],
    data() {
        return {
            
        }
    }
};

</script>

<style>

.gallery {
    font-family: 'Bellota', cursive;
    color: white;
}
.gallery__img {
    width: calc((100% - 20px) / 1);
    margin: 10px 10px 0 10px;
}
.gallery__item {
    
    text-align: center;
}
@media (min-width: 740px) {
    .gallery {
        display: flex;
        flex-wrap: wrap;
    }
    
    
    .gallery__item {
        flex: 1 1 20%;
        margin: 10px;
        
        
    }
    .gallery__img {
        width: 330px;
    
}
}



</style>