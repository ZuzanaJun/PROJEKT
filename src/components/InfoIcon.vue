<template>
  <div class="icon__main">
      <img src="/icons/info.svg" alt="info" class="infoIcon">
        
          <span class="tooltiptext">
            <div class="icon">
                <img class="iconOne" src="/icons/undo.png" alt="Zpět"> <span> Zpět </span>
            </div>
            <div class="icon">
                <img class="iconOne" src="/icons/redo.png" alt="Vpřed"><span> Vpřed </span>
            </div>
            <div class="icon">
            
                <img class="iconOne" src="/icons/rotate-left.png" alt="Otočení doleva"><span> Otočení doleva</span>
            </div>

            <div class="icon">
                <img class="iconOne" src="/icons/rotate-right.png" alt="Otočení doprava"><span> Otočení doprava</span>
            </div>

            <div class="icon">
                <img class="iconOne" src="/icons/arrange-bring-forward.png" alt="Do popředí"><span> Do popředí</span>
            </div>

            <div class="icon">
                <img class="iconOne" src="/icons/arrange-send-backward.png" alt="Do pozadí"><span> Do pozadí</span>
            </div>

            <div class="icon">
                <img class="iconOne" src="/icons/delete.png" alt="Smazání"><span> Smazání</span>
            </div>




            </span>

            <!-- <div class="icon">
                <img class="iconOne" src="/icons/undo.png" alt="Zpět"> <span> Zpět </span>
            </div>

            <div class="icon">
                <img class="iconOne" src="/icons/redo.png" alt="Vpřed"><span> Vpřed </span>
            </div>

            <div class="icon">
            
                <img class="iconOne" src="/icons/rotate-left.png" alt="Otočení doleva"><span> Otočení doleva</span>
            </div>

            <div class="icon">
                <img class="iconOne" src="/icons/rotate-right.png" alt="Otočení doprava"><span> Otočení doprava</span>
            </div>

            <div class="icon">
                <img class="iconOne" src="/icons/arrange-bring-forward.png" alt="Do popředí"><span> Do popředí</span>
            </div>

            <div class="icon">
                <img class="iconOne" src="/icons/arrange-send-backward.png" alt="Do pozadí"><span> Do pozadí</span>
            </div>

            <div class="icon">
                <img class="iconOne" src="/icons/delete.png" alt="Smazání"><span> Smazání</span>
            </div> -->
        
  </div>




</template>

<script>
export default {

}
</script>

<style>
.infoIcon {
    /* position: absolute;
    top: 15px;
    right: 10px; */
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
  top: 15px;
    right: 10px;
  display: inline-block;
  
}

.icon__main .tooltiptext {
  visibility: hidden;
  width: 300px;
  height: 500px;
  background-color: #3030309a ;
  
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 50px;
  right: 20px;
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




</style>