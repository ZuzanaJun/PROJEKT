<template>
    <div class="workspace">
        <headerbar />
        <router-link to="/workspace/moveable">Moveable</router-link>

        <!-- <sidebarleft /> -->

        <canvasarea/>

        <sidebarright />

        <!-- <footerbar/> -->

    </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import FooterBar from '../components/FooterBar.vue';
import SidebarLeft from '../components/SidebarLeft.vue';
import SidebarRight from '../components/SidebarRight.vue';
import CanvasArea from '../components/CanvasArea.vue';


export default {
    components: {
        headerbar: HeaderBar,
        footerbar: FooterBar,
        sidebarleft: SidebarLeft,
        sidebarright: SidebarRight,
        canvasarea: CanvasArea,
       
    }
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bellota:wght@300;400;700&display=swap');

.workspace {
    /* background-image: url('/images/background/workspace2.jpg'); */
    background: url(/images/background/workspace2.jpg) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    /* overflow: hidden; */
    background-color: darkcyan;
    
}

.workspace::-webkit-scrollbar {
  display: none;
}

</style>
