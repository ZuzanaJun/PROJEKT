<template>
  <div class="gallery">
   
  </div>
</template>

<script>
export default {
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