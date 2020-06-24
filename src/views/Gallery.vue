<template>
    <div class="gallery__container">
        <div class="header">

            
        
            <div class="header__logos1">
                <router-link to="/workspace">
                <img src="/images/background/vektor_10.png" alt="kolazuj" class="header__logo_f"><span class="tooltiptext">Kolážuj</span>
                </router-link>
            </div>
                
            <div class="header__logos2">
                
                <img src="/images/background/vektor_11.png" alt="logo" class="header__logo_c">
                
            </div>
            
            <div class="about">
                <router-link to="/about">
                <img src="/images/btns/about.svg" alt="o nas" class="header__logo_about">
                </router-link>
            </div>

            

        </div>
        <div class="gallery">
            <galleryitem 
                v-for="(board, boardId) in savedBoards"
                v-bind:key="boardId"
                v-bind:board="board"
                v-bind:boardId="boardId"
            > </galleryitem>
        </div>
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
        // console.log(parsedData);      
},
    components: {
        galleryitem: GalleryItem,
        footerbar: FooterBar,

    }
}
</script>


<style>
.gallery__container {
    background: url(/images/background/workspace2.jpg) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    
}





.header {
    display: flex;
    background-color: #303030;
    color: white;
    font-family: 'Bellota', Arial, Helvetica, sans-serif;
    height: 72.2px;
    
    
}


.header__logo_c,
.header__logo_f {
    height: 50px;
    margin: 10px 0 5px 20px;
    
}

.header__logos1 {
    position: absolute;
    left: 10px;
}



.header__logo_f:hover,
.header__logo_about:hover {
  transform: scale(1.1);
}

.header__logo_f,
.header__logo_about {
  transition: transform 0.3s ease-in-out;
}


.header__logos1 .tooltiptext {
  visibility: hidden;
  width: 120px;
  
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 120px;
  font-size: 19px;
}


.header__logos1:hover .tooltiptext {
  visibility: visible;
  
}

.header__logo_about {
    height: 52px;
    position: absolute;
    top: 7px;
    right: 15px;
}


@media (min-width: 740px) {
    
    
    
    .gallery {
        flex: 0 1 30%;
        margin: 10px;
        display: flex;
        
        flex-wrap: wrap;
        justify-content: center;
        
        
    }
  
    
}

</style>