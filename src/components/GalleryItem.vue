<template>
     <div class="gallery">
        <div class="gallery__item" >
            <router-link :to="`/workspace/${boardId}`">
                <img v-bind:src="board.image" alt="Koláž" class="gallery__img" />
            </router-link>
            <p class="title__img">{{board.name}}</p>
        </div>
  </div>

</template>

<script>
export default {
    props: ['board', 'boardId'],

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
    border: 4px solid transparent;    
}
.gallery__item {
    text-align: center;
}
.gallery__img:hover {
    border: 4px solid #303030;    
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