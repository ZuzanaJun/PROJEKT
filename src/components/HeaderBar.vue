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
                        class="header__save saved_line">Koláž uložena</div>
                           
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
    left: 74px;
}

.header__save {
    height: 40px;
    position:absolute;
    right: 250px;
    top: 15px
    
}

.switchPanel {
    height: 43px;
    position:absolute;
    right: 80px;
    top: 15px
    
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
  
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 55px;
  font-size: 19px;
}


.header__logos2:hover .tooltiptext {
  visibility: visible;
  
}
.saved_line{
    padding-top: 10px;
}



</style>