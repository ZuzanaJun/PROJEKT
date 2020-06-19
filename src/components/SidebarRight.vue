<template>
    <div class="sidebarright" id="sidebarright">
      <!-- <p> zkousim this shit </p> -->
        <div class="cutouts">
            <div 
                class="cutouts__item"
                v-for="cut in filteredCutouts"
                v-bind:key="cut.id"

            >
                <img v-bind:src="cut.url" class="cutouts__img">
            </div>
        </div>


      <div class="colors-picker">
          <div 
            class="colors-picker__color"
            v-for="color in colors"
            v-bind:key="color.name"
            v-bind:style="{background: color.display, height: `${100 / colors.length}%`}"
            v-on:click="handleClick(color.name)"
          >

          </div>


      </div>
    </div>
</template>

<script>
import dataCutouts from '../dataCutouts'
import shuffle from 'lodash.shuffle'

export default {
    data() {
        return {
            colors: [
                {name: 'black', display: '#303030'},
                {name: 'beige', display: '#FDEEC0'},
                {name: 'red', display: '#DA2900'},
                {name: 'pink', display: '#FD68D0'},
                {name: 'blue', display: '#389cd0'},
                {name: 'yellow', display: '#FFD200'},
                {name: 'white', display: '#fff'},
            ],
            dataCutouts,
            activeFilter: ''
        }
    },
    methods: {
        handleClick(name) {
            this.activeFilter = name;
            
        }
    },

    computed: {
        filteredCutouts() {
            if(this.activeFilter !== '') {
            return this.dataCutouts.filter(item => item.color.includes(this.activeFilter))
            } else {
                return shuffle(this.dataCutouts)
            }
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
    display: flex;
}

.colors-picker {
    height: 100%;
    width: 35px;
    background-color: antiquewhite;
}

.cutouts {
    height: 100%;
    width: 310px;
    /* border: black 2px solid; */
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
}

.cutouts::-webkit-scrollbar {
    display: none;
}

.cutouts__item {
    width: 140px;
    height: 150px;
}

.cutouts__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    


}

</style>