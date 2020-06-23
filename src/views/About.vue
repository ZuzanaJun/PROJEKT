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
                <h1>O nás</h1>
                <div class="about_foto">
                    <img src="/images/fotos/DSC_5230.jpg" alt="foto" >
                </div>
                <div class="about_foto">
                    <img src="/images/fotos/hackathon (3).jpg" alt="foto" >
                </div>
                <div class="about_foto">
                    <img src="/images/fotos/DSC_5438.jpg" alt="foto" >
                </div>
                <div class="about_foto">
                    <img src="/images/fotos/hackathon (13).jpg" alt="foto" >
                </div>

            </div>

  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bellota:wght@300;400;700&display=swap');
.about__container {
  background: url(/images/background/workspace2.jpg) no-repeat center center
    fixed;
  background-size: cover;
  height: 100%;
}

.about_foto img {
    width: 400px;
}



</style>