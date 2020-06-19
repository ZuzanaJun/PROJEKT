<template>
    <div class="sidebarright" id="sidebarright">
        <cutouts
            v-if="selectPanel"
        />  
        <background  
            v-else
            /> 
    </div> 
</template>

<script>
import Background from '../components/Background.vue';
import Cutouts from '../components/Cutouts.vue';

export default {
    data() {
        return{
            selectPanel: true,
        }
    },

    components: {
        background: Background,
        cutouts: Cutouts,
    },
    mounted() {
        this.$root.$on('switchPanel', this.switchPanel)
    },
    methods: {
        switchPanel(panel) {
            this.selectPanel = panel;

        }
    }
}
    
</script>

<style>

.sidebarright {
    position: absolute;
    right: 0;
    top: 60px;
    bottom: 0;
    /* width: 335px; */
}

</style>