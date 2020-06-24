<template>
  <div class="icon__main">

      <img src="/icons/info.svg" alt="info" class="infoIcon">


        
          <span class="tooltiptext">

            <div class="steps">
              <ol>
                <li>Klikni na <b>Pozadí</b> a vyber pozadí</li>
                <li>Myší najeď na ústřižek a přetáhni na plátno, opakuj dokud nevytvoříš kompozici, která se ti líbí</li>
                <li>Klikni na <b>Ulož</b></li>
                <li>V <b>Galerii</b> a můžeš vidět svůj výtvor, ale i výtvory jiných</li>
                <li>Pokud nejsi spokojen se svým výtvorem, klikni na něj a dostaneš se zpět na plátno a můžeš pokračovat</li>
              </ol>
             
            
            </div>


            <div class="article">
              <div class="icon">
              
                  <img class="iconOne" src="/icons/rotate-left.png" alt="Otočení doleva"><span>Otočit doleva</span>
              </div>

              <div class="icon">
                  <img class="iconOne" src="/icons/rotate-right.png" alt="Otočení doprava"><span> Otočit doprava</span>
              </div>

              <div class="icon">
                  <img class="iconOne" src="/icons/arrange-bring-forward.png" alt="Do popředí"><span>Posunout do popředí</span>
              </div>

              <div class="icon">
                  <img class="iconOne" src="/icons/arrange-send-backward.png" alt="Do pozadí"><span>Posunout do pozadí</span>
              </div>

              <div class="icon">
                  <img class="iconOne" src="/icons/delete.png" alt="Smazání"><span> Smazat ústřižek</span>
              </div>

              <div class="icon">
                  <img class="iconOne" src="/icons/reset.svg" alt="Smazání celého plátna"><span> Smazat celé plátno</span>
              </div>
              <div class="keybords">
                  <img class="iconOne" src="" alt=""><span>Klávesa [delete] Smazat ústřižek</span>
              </div>
              <div class="keybords">
                  <img class="iconOne" src="" alt=""><span>Klávesa [⬆] Posunout do popředí</span>
              </div>
              <div class="keybords">
                  <img class="iconOne" src="" alt=""><span>Klávesa [⬇] Posunout do pozadí</span>
              </div>
            </div>
            
            



            </span>

            
        
  </div>




</template>

<script>
export default {

}
</script>

<style>

.iconOne {
  width: 30px;
  margin-right: 10px;
}

.icon {
  text-align: left;
  display: flex;
  align-content: center;
  margin: 10px;
  
}

.keybords {
  text-align: left;
  margin: 15px 5px;
}



.infoIcon {
    
    margin: 0 px;
    width: 40px;
    
}

.infoIcon:hover {
  transform: scale(1.1);
  
}

.infoIcon {
  transition: transform 0.3s ease-in-out;
}


.icon__main {
  position: absolute;
  bottom: 70px;
  left: 17px;
  display: inline-block;
  z-index: 2147483647;
  font-family: 'Bellota', Arial, Helvetica, sans-serif;
  color: white;
  
}

.icon__main .tooltiptext {
  visibility: hidden;
  width: 600px;
  height: 580px;
  background-color: #3030309a ;
  
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: -40px;
  left: 81px;
}

.icon__main .tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  
  
  
}
.icon__main:hover .tooltiptext {
  visibility: visible;
}

.steps {
  text-align: left;
  border: 1px white solid;
  margin: 10px 20px;
  padding: 10px 0;
}

.article {
  margin:  5px 20px;
}



</style>