<template>
    <div class="sidebarright" id="sidebarright">
      <!-- <p> zkousim this shit </p> -->
        <div class="cutouts">
            <div 
                class="cutouts__item"
                v-for="cut in dataCutouts"
                v-bind:key="cut.id"
            >

            </div>
        </div>


      <div class="colors-picker">
          <div 
            class="colors-picker__color"
            v-for="color in colors.reverse()"
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

export default {
    data() {
        return {
            colors: [
                {name: 'white', display: '#fff'},
                {name: 'yellow', display: '#FFD200'},
                {name: 'blue', display: '#38B7D0'},
                {name: 'pink', display: '#FD68D0'},
                {name: 'red', display: '#DA2900'},
                {name: 'beige', display: '#FDEEC0'},
                {name: 'black', display: '#000'},
            ],
            dataCutouts
        }
    },
    methods: {
        handleClick(name) {
            alert(name);

        }
    }
}
</script>

<style>

.sidebarright {
    position: absolute;
    right: 0;
    top: 48px;
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
    width: 300px;
    border: black 2px solid;
    display: flex;
    flex-wrap: wrap;
}

.cutouts__item {
    width: 140px;
    height: 150px;
    background-color: blueviolet;
}

</style>