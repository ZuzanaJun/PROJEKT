<template>
  <div class="about__container">
    <div class="header">
      <div class="header__logos1">
        <router-link to="/workspace">
          <img src="/images/background/vektor_10.png" alt="logo" class="header__logo_f" />
          <span class="tooltiptext">Kolážuj</span>
        </router-link>
      </div>

      <div class="header__logos2">
        <router-link to="/gallery">
          <img src="/images/background/vektor_11.png" alt="logo" class="header__logo_cross" />
          <span class="tooltiptext">Galerie</span>
        </router-link>
      </div>
    </div>

    <div class="about__content">
      <h1>Jak tento projekt vznikal</h1>
      
      <div class="about_foto">
        <img src="/images/fotos/hackathon (3).jpg" alt="foto" />
      </div>

      <div class="about_foto">
        <img src="/images/fotos/DSC_5230.jpg" alt="foto" />
      </div>

      <p>Projekt Kolážovník vznikal v rámci Digitální Akademie Web. Dohromady se daly Véra se Zuzkou, které zjistily, že mají podobnou potřebu kreativního vyjádření a to právě (mimo jiné) právě v podobě koláží. S impulzem pro tento projekt přišla Veronika, ale nebyla to první věc co ji napadla. Hledala nějaký nápad s větším sociálním nebo edukativním dopadem, ovšem pocit, že všechno už bylo vymyšleno a zpracováno, ji vrátilo právě k myšlence udělat si projekt pro radost. A právě to co ji baví nabídnout i ostatním k vyzkoušení. Zuzku myšlenka zaujala a představa o Kolážovníku se začala formovat do realných obrysů.</p>
        <p class="name">Veronika Zimčíková</p> 
        <p>Má ráda architekturu, umění, ale i design</p>
        <p class="name">Zuzana Junkerova</p> 
        <p>Má ráda přírodu, zvířata, svého přítele.</p>
        

      <div class="about_foto">
        <img src="/images/fotos/DSC_5438.jpg" alt="foto" />
      </div>

        <p>Kolážovník by pravděpodobně nevzniknul bez skvělého Luďka, který nám byl skvělým lektorem i oporou a jeho snaha nám předávat informace byla nekonečná, jen škoda, že lekce měli jen omezený počet hodin. </p>
        <p>Dalším velmi důležitým elementem byl mentor Martin Čapek, který se nezalekl složitého projektu a šel do toho s námi.</p>

      <div class="about_foto">
        <img src="/images/fotos/hackathon (13).jpg" alt="foto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bellota:wght@300;400;700&display=swap");

.about__container {
  background: url(/images/background/workspace2.jpg) no-repeat center center
    fixed;
  background-size: cover;
  height: 100%;
  font-family: "Bellota", cursive;
  color: white;
}


.name {
    font-size: 20px;
    font-weight: bold;
}
    

.about_foto img{
    width: calc((100% - 20px) / 1);
    margin: 10px 10px 0 10px;
}

.about__content {
    flex-shrink: 1;
    margin: 10px;
   
}

.about__content h1 {
        text-align: center;

}

p {
    margin: 20px;
    
};



</style>