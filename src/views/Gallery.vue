<template>
    <div class="gallery__container">
        <div class="header">
        
            <div class="header__logos">
                <router-link to="/workspace">
                    <img src="/images/background/vektor_10.png" alt="logo" class="header__logo">
                </router-link>
                <router-link to="/gallery">
                    <img src="/images/background/vektor_11.png" alt="logo" class="header__logo">
                </router-link>        
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

.gallery__container {
    background: url(/images/background/workspace2.jpg) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
}

</style>