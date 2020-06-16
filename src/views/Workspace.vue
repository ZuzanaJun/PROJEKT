<template>
    <div class="workspace">
        <headerbar />

        <sidebarleft />

        <sidebarright />


    </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import SidebarLeft from '../components/SidebarLeft.vue';
import SidebarRight from '../components/SidebarRight.vue';

export default {
    components: {
        headerbar: HeaderBar,
        sidebarleft: SidebarLeft,
        sidebarright: SidebarRight,
    }
    
}
</script>