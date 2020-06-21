<template>
    <div class="workspace">
        <headerbar />
        <editbuttons/>

        <!-- <sidebarleft /> -->

        <canvasarea/>


        <sidebarright />

        <div class="reset">
            <img src="/icons/reset.svg" alt="reset" class="iconReset" ><span class="tooltiptext">Reset</span>
        </div>


        <!-- <footerbar/> -->
        

    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import HeaderBar from '../components/HeaderBar.vue';
import FooterBar from '../components/FooterBar.vue';

import SidebarRight from '../components/SidebarRight.vue';
import CanvasArea from '../components/CanvasArea.vue';
import EditButtons from '../components/EditButtons.vue';



export default {

    components: {
        headerbar: HeaderBar,
        footerbar: FooterBar,
        
        sidebarright: SidebarRight,
        canvasarea: CanvasArea,
        editbuttons: EditButtons,
        
       
    },
    mounted(){
        if(this.$route.params.id === undefined){
            this.$router.push({ path: `/workspace/${uuidv4()}` });
        }
        console.log(this.$route.params.id);
    }
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bellota:wght@300;400;700&display=swap');

.workspace {
    /* background-image: url('/images/background/workspace2.jpg'); */
    background: url(/images/background/workspace2.jpg) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    /* overflow: hidden; */
    background-color: darkcyan;
    font-family: 'Bellota', cursive;
}

.workspace::-webkit-scrollbar {
  display: none;
}

.iconReset {
    width: 40px;
    /* position: absolute;
    bottom: 15px;
    left: 15px; */
}

.reset {
  position: absolute;
  bottom: 15px;
    left: 15px;
  display: inline-block;
  
}

.reset .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: rgba(255, 255, 255, 0.747) ;
  color: #303030;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: -5px;
  left: 110%;
}

.reset .tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent white transparent transparent;
}
.reset:hover .tooltiptext {
  visibility: visible;
}

.tooltiptext {
    margin: 10px;
}

</style>
