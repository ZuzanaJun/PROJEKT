<template>
  <div class="sidebarleft">
       <v-card height="100vh">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent      
      >
       
        </v-list-item>
  
        <v-list dense>
          <v-list-item
            v-for="item in barItems"
            :key="item.title"
            link
            @click.stop="mini = !mini"
            class="my-4"

          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
    data() {
        return{
            mini: true,
            barItems: [
                {
                    title: 'Pozadí',
                    icon: 'mdi-image-area'
                }
            ]
        }
    }
}
</script>

<style>

</style>