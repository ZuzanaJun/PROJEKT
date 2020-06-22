<template>
    <div class="header">
        
            <div class="header__logos">
                <img src="/images/background/vektor_10.png" alt="logo" class="header__logo">
                
                <router-link to="/gallery">
                <img src="/images/background/vektor_11.png" alt="logo" class="header__logo">
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

.header {
    display: flex;
    background-color: #303030;
    color: white;
    font-family: 'Bellota', cursive;
    
    align-items: center;
}

.header__logo {
    height: 50px;
    margin: 10px 0 5px 10px;
    
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

.header__logo:hover,
.header__save:hover,
.switchPanel:hover {
  transform: scale(1.1);
}

.header__logo,
.header__save,
.switchPanel {
  transition: transform 0.3s ease-in-out;
}




</style>