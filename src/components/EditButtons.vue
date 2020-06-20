<template>
  <div class="edit-buttons">
    <img src="/icons/undo.png" alt="">
    <img src="/icons/redo.png" alt="">
    <img src="/icons/rotate-left.png" alt="">
    <img src="/icons/rotate-right.png" alt="">
    <img src="/icons/arrange-bring-forward.png" alt="">
    <img src="/icons/arrange-send-backward.png" alt="">
    <img src="/icons/delete.png" alt="">
    
    <!-- <img src="/icons/sort-up-solid.svg" alt="">
    <img src="/icons/sort-down-solid.svg" alt=""> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

.edit-buttons {
  /* background-color: burlywood; */
  width: 30px;
  position: absolute;
  top: 260px;
  left: 60px;
}

.edit-buttons img:hover {
  transform: scale(1.1);
}

.edit-buttons img {
  width: 100%;
  transition: transform 0.3s ease-in-out;
}

</style>