<template>
    <div class="workspace">
        <headerbar />

        <sidebarleft />

        <sidebarright />

        <footerbar/>

    </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import FooterBar from '../components/FooterBar.vue';
import SidebarLeft from '../components/SidebarLeft.vue';
import SidebarRight from '../components/SidebarRight.vue';

export default {
    components: {
        headerbar: HeaderBar,
        footerbar: FooterBar,
        sidebarleft: SidebarLeft,
        sidebarright: SidebarRight,
    }
    
}
</script>