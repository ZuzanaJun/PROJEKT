<template>
    <div class="gallery__container">
        <div class="header">

            
        
            <div class="header__logos">
                <router-link to="/workspace">
                    <img src="/images/background/vektor_10.png" alt="logo" class="header__logo_flower">
                </router-link>
                <router-link to="/gallery">
                    <img src="/images/background/vektor_11.png" alt="logo" class="header__logo_cross">
                </router-link>        
            </div>
           
        </div>

        <galleryitem 
            v-for="(board, boardId) in savedBoards"
            v-bind:key="board.data.id"
            v-bind:board="board"
            v-bind:boardId="boardId"
        > </galleryitem>

        <footerbar/>
        

      
    </div>
</template>


<script>
import GalleryItem from '../components/GalleryItem';
import FooterBar from '../components/FooterBar.vue';


export default {
    data() {
        return{
            savedBoards: '',
        }
    },
    mounted() {

        const dataObj = window.localStorage.getItem('boards');          
        const parsedData = JSON.parse(dataObj);
        this.savedBoards = parsedData;

        console.log(parsedData);
    
        
},
    components: {
        galleryitem: GalleryItem,
        footerbar: FooterBar,

    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Bellota:wght@300;400;700&display=swap');

.gallery__container {
    background: url(/images/background/workspace2.jpg) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    
}





.header {
    display: flex;
    background-color: #303030;
    color: white;
    font-family: 'Bellota', cursive;
    
    
}








</style>