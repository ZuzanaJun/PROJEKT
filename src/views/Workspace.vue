<template>
    <div class="workspace">
        <headerbar />

        <sidebarleft />

        <canvasarea/>

        <sidebarright />

        <footerbar/>

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

.workspace {
    /* background-image: url('/images/background/workspace2.jpg') ;
    background-size: cover; */
    background-color: darkcyan;
}

</style>
