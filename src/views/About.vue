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
      <div class="fist_img">
        <div class="about_foto">
          <img src="/images/fotos/hackathon.jpg" alt="foto" />
        </div>

        <!-- <div class="about_foto">
            <img src="/images/fotos/mym.jpg" alt="foto" />
        </div>-->
      </div>

      <p>Projekt Kolážovník vznikal v rámci Digitální Akademie Web pod hlavičkou Czechitas v Brně. Dohromady se daly Véra se Zuzkou, které zjistily, že mají podobnou potřebu kreativního vyjádření. S&nbsp;impulzem pro tento projekt přišla Veronika, ale nebyla to první věc co ji napadla. Hledala nějaký nápad s větším sociálním nebo edukativním dopadem, ovšem pocit, že všechno už bylo vymyšleno a&nbsp;zpracováno, ji vrátilo právě k myšlence udělat si projekt pro radost. A&nbsp;právě to, co ji baví, nabídnout i&nbsp;ostatním k&nbsp;vyzkoušení. Zuzku myšlenka nadchla, jelikož sama čas od času vyplní volný čas tím, že vezme do ruky staré časopisy, nůžky, lepidlo a vytvoří abstraktní kompozici. Holky daly hlavy dohromady a&nbsp;představa o Kolážovníku se začala formovat do realných obrysů.</p>
      <div class="about_foto">
        <img src="/images/fotos/meetmentor.jpg" alt="foto" />
      </div>

      <div class="container__us">
        <img class="container__image-v" src="/images/fotos/ve.jpg" alt="foto" />
        <div class="container__text-v">
          <p class="name">Veronika Zimčíková</p>
          <p>Véra se zajímá o umění, grafický design a architekturu.</p>
        </div>
      </div>

      <div class="container__us">
        <img class="container__image-v" src="/images/fotos/zu.jpg" alt="foto" />
        <div class="container__text-z">
          <p class="name">Zuzana Junkerová</p>
          <p>Zuzka má ráda všechno živé a přírodu i neživou, zejména podzemní svět jeskyní.</p>
        </div>
      </div>

      <div class="mentors">
        <div class="mentor">
          <p>Dalším velmi důležitým elementem byl mentor Martin Čapek, který se nezalekl složitého projektu a&nbsp;šel do toho s námi.</p>
          <div class="about_foto-profil">
            <img src="/images/fotos/ma.png" alt="foto" />
          </div>
        </div>

        <div class="mentor">
          <p>Kolážovník by pravděpodobně nevzniknul bez skvělého Luďka Rolečka, který nám byl lektorem i&nbsp;oporou a jeho snaha nám předávat informace byla nekonečná, děkujeme za cenné rady a hlavně trpělivost.</p>
          <div class="about_foto-profil">
            <img src="/images/fotos/ludek.jpeg" alt="foto" />
          </div>
        </div>

        
      </div>
      
    </div>

    <footerbar />
  </div>
</template>

<script>
import FooterBar from "../components/FooterBar.vue";

export default {
  components: {
    footerbar: FooterBar
  }
};
</script>

<style>
.about__container {
  background: url(/images/background/workspace2.jpg) no-repeat center center
    fixed;
  background-size: cover;
  height: 100%;
  font-family: "Bellota", cursive;
  color: white;
  font-size: 17px;
}

.name {
  font-size: 20px;
  font-weight: bold;
}

.about_foto img {
  width: calc((70% - 20px) / 1);
  margin: 10px;
  padding: 10px;
}

.about__content {
  /*     flex-shrink: 1;
    margin: 10px; */
  margin: 25px auto 60px auto;
  max-width: 50em;
  text-align: center;
  border: 1px solid white;
  padding: 20px 0;
}

.about__content h1 {
  text-align: center;
  padding: 10px;
}

.about__content p {
  margin: 20px;
  padding: 15px;
  text-align: justify;
}

.about_foto-profil {
  display: flex;
}

.container__us {
  display: flex;
  margin: 30px;
  padding: 40px;
}

.container__image-z {
  margin: 0 50px;
  width: 250px;
  object-fit: contain;
  /*   justify-self: flex-start;
 */
  order: 1;
}
.container__image-v {
  margin: 0 50px;
  width: 250px;
  object-fit: contain;
  /*   justify-self: flex-end;
 */
  order: 2;
}

.container__text-z {
  flex: 1 1 auto;
  text-align: left;
  order: 2;
}
.container__text-v {
  flex: 1 1 auto;
  text-align: left;
  order: 1;
}

.mentors {
  display: flex;
  height: 150px;
  margin: 30px;
  text-align: center;
  /* border: 2px solid green; */
  height: 400px;
  
}
.mentors img {
  height: 250px;
  margin: 10px 20px;
}
.mentor {
  flex-basis: 50%;
}
.mentors p {
  text-align: justify;
  padding: 0;
  height: 120px;
}
</style>