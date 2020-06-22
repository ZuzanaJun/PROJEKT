<template>
    <div class="gallery__container">
        <div class="header">

            
        
            <div class="header__logos1">
                <router-link to="/workspace">
                <img src="/images/background/vektor_10.png" alt="logo" class="header__logo_f"><span class="tooltiptext">Kolážuj</span>
                </router-link>
            </div>
                
            <div class="header__logos2">
                
                <img src="/images/background/vektor_11.png" alt="logo" class="header__logo_c">
                
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



.header__logo_f:hover {
  transform: scale(1.1);
}

.header__logo_f {
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






</style>