<template>
    <div class="gallery__container">
        <div class="header">
        
            <div class="header__logos">
                <img src="/images/background/vektor_10.png" alt="logo" class="header__logo">
                <img src="/images/background/vektor_11.png" alt="logo" class="header__logo">
                        
                <!-- <div class="header__shuffle-btn"></div> -->
            </div>
           
        </div>

        <galleryitem />

        
    </div>
</template>


<script>
import GalleryItem from '../components/GalleryItem'

export default {
    
    components: {
        galleryitem: GalleryItem
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

</style>