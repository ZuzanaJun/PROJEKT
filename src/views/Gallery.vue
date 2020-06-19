<template>
    <div class="gallery__container">
        <div class="header">
        
            <div class="header__logos">
                <img src="/images/background/vektor_10.png" alt="logo" class="header__logo">
                <img src="/images/background/vektor_11.png" alt="logo" class="header__logo">
                        
                <!-- <div class="header__shuffle-btn"></div> -->
            </div>
           
        </div>

        <div class="gallery">
            <div 
                class="gallery__item"
                v-for="prefin in prefins"
                v-bind:key="prefin.id"
                >
                <img v-bind:src="prefin.url" alt="collages" class="gallery__img">

            </div>
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
                {id: 5003, name: 'prefinished3.jpg', type: 'pattern', url: '/images/prefinished/prefinished3.jpg'}
            ]
        }
    }
}
</script>


<style>

.header {
    display: flex;
    background-color: #303030;
    color: white;
    font-family: 'Bellota', cursive;
    align-items: center;
    
    
}

.gallery {
    display: flex;
}


</style>