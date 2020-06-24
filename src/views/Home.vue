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
                        <h2 class="logotext" >Kolážuj</h2>
                    </transition>
            
            </div>   
            <div class="logos">
                <router-link to="/gallery">
                    <img src="/images/background/vektor_11.svg" alt="logo" class="logo" v-on:mouseover="appearanceG = !appearanceG" >
                </router-link>
                <transition name="fade">
                    <h2 class="logotext" >Galerie</h2>       
                </transition>
            </div> 
        </div>

        <div class="about">
                <router-link to="/about">
                <img src="/images/btns/about.svg" alt="o nas" class="header__logo_about">
                </router-link>
            </div>

    </div>
</template>


<script>

export default {
    
}
</script>


<style>
.homepage {
    background: url(/images/background/uvod03.jpg) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    overflow: hidden;
    color: white;
    
}

h3 {
    font-family: 'Bellota', Arial, Helvetica, sans-serif;
    margin: 30px;
    font-size: 30px;
    
    
}

.logos {
    margin: 50px;
    /* margin-top: 150px; */
    text-align: center;   
    flex-shrink: 1;
}



h2 {
    font-family: 'Bellota', Arial, Helvetica, sans-serif;
    margin: 30px 50px;
    font-size: 20px;
    
    
}

.logotext {
    text-decoration: none;
    color: white;
    margin: 10px;
    
}

.logo {
    max-height: 220px;
    transition: transform 0.3s ease-in-out;
    
}

.logo:hover {
    transform: scale(1.1);
    
}


@media (min-width: 740px) {

h2 {
    font-size: 30px;
}

.logo {
    max-height: 260px;
    
}

 
.homepage {
    display: flex;
    flex-direction: column;
}





.logo__all {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    
}









}

</style>