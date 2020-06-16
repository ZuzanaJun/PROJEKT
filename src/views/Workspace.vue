<template>
    <div class="workspace">
        <headerbar />

        <sidebarleft />


    </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';
import SidebarLeft from '../components/SidebarLeft.vue';

export default {
    components: {
        headerbar: HeaderBar,
        sidebarleft: SidebarLeft,
    }
    
}
</script>