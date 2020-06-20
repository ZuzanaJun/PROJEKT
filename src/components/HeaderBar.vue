<template>
    <div class="header">
        
            <div class="header__logos">
                <img src="/images/background/vektor_10.png" alt="logo" class="header__logo">
                
                <router-link to="/gallery">
                <img src="/images/background/vektor_11.png" alt="logo" class="header__logo">
                </router-link>
            </div>

 
               
                <button
                    @click="$root.$emit('saveData')"
                >Uložit</button>
            

            <div class="header__btns">
                <img src="/images/btns/save.svg" alt="" class="header__save">

                           
                <img
                    class="switchPanel"                     
                    v-on:click="switchPanel"
                    v-bind:src="selectPanel ? '/images/btns/pozadi.svg' : '/images/btns/ustrizky.svg'" 
                    alt="tlacitko pozadi">
            
            </div>
            <!-- <button                     
                v-on:click="switchPanel"
            > {{selectPanel ? 'Pozadí' : 'Výstřižky'}}</button> -->
       

            <div 
                class="header__shuffle-btn"
                @click="shuffle"
                >
            </div>
        


           
    </div>
</template>


<script>
export default {
    data(){
        return{
             selectPanel: true,

        }
    },
    methods: {
        switchPanel() {
            this.selectPanel = !this.selectPanel;
            this.$root.$emit('switchPanel', this.selectPanel);
        },
        shuffle() {
            this.$root.$emit('shuffle');
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

.header_second {
    display: flex;
    align-items: center;
    
    
}

.header__logo {
    height: 50px;
    margin: 10px 0 5px 10px;
    
}



.header__shuffle-btn {
    background: linear-gradient(131deg, rgba(253,238,192,1) 0%, rgba(218,41,0,1) 21%, rgba(253,104,208,1) 45%, rgba(56,156,208,1) 70%, rgba(255,210,0,1) 100%);
    height: 67.2px;
    width: 35px;
    /* border-radius: 40%; */
    position: absolute;
    right: 0;
    top: 0;
  

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


</style>