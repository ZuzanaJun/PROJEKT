<template>
    <div class="header">
        
                   
            <div class="header__logos1">
                <img src="/images/background/vektor_10.png" alt="logo" class="header__logo_flower">
            </div>
                
            <div class="header__logos2">
                <router-link to="/gallery">
                <img src="/images/background/vektor_11.png" alt="logo" class="header__logo_cross"><span class="tooltiptext">Galerie</span>
                </router-link>
            </div>
 

 
               
               
            

            <div class="header__btns">
               
                    <img 
                        v-if="!saveAction"
                        src="/images/btns/save.svg" alt="ulozit" class="header__save" @click="$root.$emit('saveData')">
                    <div v-else
                        class="header__save">Koláž uložena</div>
                           
                <img
                    class="switchPanel"                     
                    v-on:click="switchPanel"
                    v-bind:src="selectPanel ? '/images/btns/pozadi.svg' : '/images/btns/ustrizky.svg'" 
                    alt="tlacitko pozadi">

                <infoicon />
            
            </div>
            <!-- <button                     
                v-on:click="switchPanel"
            > {{selectPanel ? 'Pozadí' : 'Výstřižky'}}</button> -->
       

            
       
          
    </div>
</template>


<script>
import InfoIcon from '../components/InfoIcon.vue';

export default {
    mounted(){
        this.$root.$on('saveData', this.showAction);
        this.$root.$on('pickerClicked', this.pickerClicked);
        
    },
    components: {
        infoicon: InfoIcon 
    },

    data(){
        return{
             selectPanel: true,
             saveAction: false,

        }
    },
    methods: {
        switchPanel() {
        this.selectPanel = !this.selectPanel;
        this.$root.$emit('switchPanel', this.selectPanel);
    },
        showAction() {
            this.saveAction = true;
            setTimeout( this.btnReturn, 2000);
        },
        btnReturn() {
            this.saveAction = false;
        },
        pickerClicked(value){
            this.selectPanel = value;
        }
       
    }
    
}
</script>


<style>

/* .header {
    display: flex;
    background-color: #303030;
    color: white;
    font-family: 'Bellota', cursive;
    
    align-items: center;
} */

.header__logo_cross,
.header__logo_flower {
    height: 50px;
    margin: 10px 0 5px 20px;
    
}

.header__logos2 {
    position: absolute;
    left: 70px;
}

.header__save {
    height: 35px;
    position:absolute;
    right: 240px;
    top: 20px
    
}

.switchPanel {
    height: 35px;
    position:absolute;
    right: 100px;
    top: 20px
    
}

.header__logo_cross:hover,
.header__save:hover,
.switchPanel:hover {
  transform: scale(1.1);
}

.header__logo_cross,
.header__save,
.switchPanel {
  transition: transform 0.3s ease-in-out;
}


.header__logos2 .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: rgba(255, 255, 255, 0.747) ;
  color: #303030;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 110%;
}

.header__logos2 .tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent rgba(255, 255, 255, 0.747) transparent transparent;
}

.header__logos2:hover .tooltiptext {
  visibility: visible;
  
}

.tooltiptext {
    margin: 10px;
}


</style>