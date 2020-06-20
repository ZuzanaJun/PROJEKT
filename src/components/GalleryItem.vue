<template>
  <div class="gallery">
    <div 
        class="gallery__item" 
        v-for="prefin in prefins" 
        v-bind:key="prefin.id">
      <img v-bind:src="prefin.url" alt="collages" class="gallery__img" />
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            prefins: [
                {id: 5001, name: 'prefinished1.jpg', type: 'pattern', url: '/images/prefinished/prefinished1.jpg'},
                {id: 5002, name: 'prefinished2.jpg', type: 'pattern', url: '/images/prefinished/prefinished2.jpg'},
                {id: 5003, name: 'prefinished3.jpg', type: 'pattern', url: '/images/prefinished/prefinished3.jpg'},
            ]
        }
    }
};
</script>

<style>



.gallery {
    display: flex;
    
}

.gallery__img {
    width: 400px;
}

</style>