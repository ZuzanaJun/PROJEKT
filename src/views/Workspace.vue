<template>
    <div class="workspace">
        <headerbar />
        <editbuttons/>


        <canvasarea/>


        <sidebarright />

        <infoicon/>

        <div 
          @click="resetCanvas"
          class="reset">
            <img src="/icons/reset.svg" alt="reset" class="iconReset" ><span class="tooltiptext">Smazat celou koláž</span>
        </div>

    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import HeaderBar from '../components/HeaderBar.vue';
import SidebarRight from '../components/SidebarRight.vue';
import CanvasArea from '../components/CanvasArea.vue';
import EditButtons from '../components/EditButtons.vue';
import InfoIcon from '../components/InfoIcon.vue';



export default {

    components: {
        headerbar: HeaderBar,        
        sidebarright: SidebarRight,
        canvasarea: CanvasArea,
        editbuttons: EditButtons,
        infoicon: InfoIcon,
        
       
    },
    mounted(){
        if(this.$route.params.id === undefined){
            this.$router.push({ path: `/workspace/${uuidv4()}` });
        }
        // console.log(this.$route.params.id);
    },
    methods: {
      resetCanvas(){
        const promptData = confirm('Opravdu chcete vyčistit pracovní plochu?');
       
       if(promptData){
          this.$root.$emit('resetCanvas')
       }

      }
    }
    
}
</script>

<style>
.workspace {
    /* background-image: url('/images/background/workspace2.jpg'); */
    background: url(/images/background/workspace2.jpg) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    /* overflow: hidden; */
    background-color: #303030;
    font-family: 'Bellota', Arial, Helvetica, sans-serif;
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

.reset:hover {
  transform: scale(1.1);
}

.reset {
  transition: transform 0.3s ease-in-out;
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
  color: red;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: -20px;
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
  border-color: transparent rgba(255, 255, 255, 0.747) transparent transparent;
}
.reset:hover .tooltiptext {
  visibility: visible;
}

.tooltiptext {
    margin: 10px;
}

</style>
