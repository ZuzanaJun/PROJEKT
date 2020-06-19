<template>
    <div class="homepage">

        <div class="title">
            <h3>Kolážovník</h3>
        </div>

        <div class="logo__all">
            <div class="logos">
                
                <router-link to="/workspace">
                    <img src="/images/background/vektor_10.svg" alt="logo" class="logo" v-on:mouseover="appearance = !appearance" > 
                </router-link>
                    <transition name="fade">
                        <h2 class="logotext" v-if="appearance">Kolážuj</h2>
                    </transition>
            
            </div>   
            <div class="logos">
                <router-link to="/gallery">
                    <img src="/images/background/vektor_11.svg" alt="logo" class="logo" v-on:mouseover="appearanceG = !appearanceG" >
                </router-link>
                <transition name="fade">
                    <h2 class="logotext" v-if="appearanceG">Galerie</h2>       
                </transition>
            </div> 
        </div>
        

     


        <!-- <v-app>
            
            <div class="text-center">
                <v-btn class="ma-2" outlined color="indigo"><router-link to="/workspace">Začít</router-link></v-btn>     
                <v-btn class="ma-2" outlined color="indigo"><router-link to="/gallery">Přejít do galerie</router-link></v-btn>     
            </div>
        
        </v-app> -->
    </div>
</template>


<script>
export default {
    data() {
        return {
            appearance: false,
            appearanceG: false
        }
    },
    // methods: {
    //     appearText() {
    //         this.appearance = !this.appearance
    //     }
    // }
}
</script>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Bellota:wght@300;400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@300;400;500;700&display=swap&subset=latin-ext');
.homepage {
    background: url(/images/background/uvod03.jpg) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    overflow: hidden;
  
  

    color: white;
    
}

h3 {
    font-family: 'Bellota', cursive;
    /* font-family: 'MuseoModerno', cursive; */
    margin: 20px 30px;
    font-size: 20px;
    
}


h2 {
    font-family: 'Bellota', cursive;
    margin: 30px 50px;
    font-size: 40px;
    
    
}

.logotext {
    text-decoration: none;
    color: white;
    opacity: 0.8;
}

.logo__all {
    display: flex;
    justify-content: center; 
    
}

.logos {
    margin: 20px;
    margin-top: 150px;
    text-align: center;
    
    
}

.logo {
    max-height: 280px;
    
    
}

.fade-enter-active, 
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, 
.fade-leave-to {
  opacity: 0;
}

</style>