<template>
    <div class="sidebarright" id="sidebarright">
        <cutouts
            v-if="selectPanel"
        />  
        <background  
            v-else
            /> 

        <colorpicker class="colorpicker"/>

    </div> 
</template>

<script>
import Background from '../components/Background.vue';
import Cutouts from '../components/Cutouts.vue';
import ColorPicker from '../components/ColorsPicker.vue';

export default {
    data() {
        return{
            selectPanel: true,
        }
    },

    components: {
        background: Background,
        cutouts: Cutouts,
        colorpicker: ColorPicker
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
    top: 72px;
    bottom: 0;
    width: 335px;
    display: flex;
}




/* .sidebarright::-webkit-scrollbar {
  display: none;
} */

</style>