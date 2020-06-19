<template>
    <div class="header">
        
        <div class="header__logos">
            <img src="/images/background/vektor_10.png" alt="logo" class="header__logo">
            <img src="/images/background/vektor_11.png" alt="logo" class="header__logo">
        </div>
        <!-- <h1 class="header__text">Kolážovník</h1> -->
<!--         <h1 class="header__text">Ulož do galerie</h1>
 -->        
        <button
            v-on:click="switchPanel"
        > {{selectPanel ? 'Pozadí' : 'Výstřižky'}}</button>
        <div class="header__shuffle-btn"></div>


            <!-- <v-app-bar dense dark >  

                <v-avatar class="mx-3">
                     <v-img src="/images/IMG_logo.jpg" alt="logo"></v-img>
                </v-avatar>

                <v-toolbar-title>Kolážovník</v-toolbar-title>
        
                <v-spacer></v-spacer>
        
                <v-menu left bottom >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        >
                        <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
        
                    <v-list>
                        <v-list-item
                        v-for="n in 5"
                        :key="n"
                        @click="() => {}"
                        >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar> -->
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
            this.$root.$emit('switchPanel', this.selectPanel)
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
    height: 40px;
    margin: 10px 0 10px 10px;
    
}

.header__logos {
    margin-right: auto;
}


.header__text {
    align-items: center;
    /* margin: 10px; */
   
    font-size: 15px;
    border: white solid 1.2px;
    border-radius: 5px;
    padding: 5px;
}

.header__shuffle-btn {
    background: linear-gradient(131deg, rgba(253,238,192,1) 0%, rgba(218,41,0,1) 21%, rgba(253,104,208,1) 45%, rgba(56,156,208,1) 70%, rgba(255,210,0,1) 100%);
    height: 30px;
    width: 20px;
    /* border-radius: 40%; */
    /* position: absolute;
    right: 8px;
    top: 13px; */
    margin: 6px;
    

}


</style>