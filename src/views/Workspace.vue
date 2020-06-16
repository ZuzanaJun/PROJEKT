<template>
    <div class="workspace">
        <headerbar />

        <sidebarleft />

        <footerbar/>

    </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import FooterBar from '../components/FooterBar.vue';
import SidebarLeft from '../components/SidebarLeft.vue';

export default {
    components: {
        headerbar: HeaderBar,
        footerbar: FooterBar,
        sidebarleft: SidebarLeft,
    }
    
}
</script>