<template>
    <div class="header">
        
            <div class="header__logos">
                <img src="/images/background/vektor_10.png" alt="logo" class="header__logo">
                
                <router-link to="/gallery">
                <img src="/images/background/vektor_11.png" alt="logo" class="header__logo">
                </router-link>
            </div>


        
            
                
               
                <button>Ulož koláž</button>
            

            
            <button                     
                v-on:click="switchPanel"
            > {{selectPanel ? 'Pozadí' : 'Výstřižky'}}</button>
            
       

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
    justify-content: space-between;
    align-items: center;
    
    
    
    
}

.header_second {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}

.header__logo {
    height: 40px;
    margin: 10px 0 10px 10px;
    
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


</style>