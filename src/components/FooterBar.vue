<template>
  <div class="footer">
            <div><router-link to="/about">Projekt</router-link><span> &copy; 2020</span></div>       
  </div>
</template>

<script>
export default {

}
</script>

<style>
.v-application a {
  text-decoration: none;
  color: white !important;
}
.footer{
    text-align: center;
    background-color: #303030;
    font-size: small;
    width: 100%;
    position: absolute;
    bottom: 0;
    color: white;
    font-family: 'Bellota', Arial, Helvetica, sans-serif;
    box-shadow: 0px -2px 4px 0px rgba(0,0,0,0.75);
}
</style>