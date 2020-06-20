<template>
  <div class="gallery">
    <div 
        class="gallery__item" 
        v-for="prefin in prefins" 
        v-bind:key="prefin.id">
      <img v-bind:src="prefin.url" alt="collages" class="gallery__img" />
      <p class="title__img">popisek obrazku</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            prefins: [
                {id: 1001, name: 'b001.png', type: 'pattern', url: '/images/background/b001.png'},
                {id: 1002, name: 'b002.png', type: 'pattern', url: '/images/background/b002.png'},
                {id: 1003, name: 'b003.png', type: 'pattern', url: '/images/background/b003.png'},
                {id: 1004, name: 'b004.png', type: 'foto', url: '/images/background/b004.png'},
                {id: 1005, name: 'b005.png', type: 'foto', url: '/images/background/b005.png'},
                {id: 1006, name: 'b006.png', type: 'foto', url: '/images/background/b006.png'},
                {id: 1007, name: 'b007.png', type: 'foto', url: '/images/background/b007.png'},
                {id: 1008, name: 'b008.png', type: 'foto', url: '/images/background/b008.png'},
                {id: 1009, name: 'b009.png', type: 'foto', url: '/images/background/b009.png'}
            ]
        }
    }
};
</script>

<style>


.gallery__img {
    width: calc((100% - 20px) / 1);
    margin: 10px 10px 0 10px;
}

.gallery__item {
    
    text-align: center;
}

@media (min-width: 740px) {
    .gallery__item {
        display: flex;
        flex-wrap: wrap;
    }

    .gallery__img {
    
    
}
}


</style>