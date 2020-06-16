<template>
  <div class="sidebarleft">
    <v-card height="100vh" class="rounded-0">
      <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
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

            <v-list-item-content :close-on-click="closeOnClick">
             <v-list-item-action >
                  <v-btn
                    absolute top right
                    icon
                    @click="menu = false"              
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-list-item-action>
              <v-list-item-title class="my-3">{{item.title}}</v-list-item-title>
              <div class="mb-2"> <!-- pozadí pak budou vypsaná cyklem -->
                <v-img src="/images/background/b002.jpg" alt="pozadí" max-height="100" ></v-img>
              </div>
              <div class="mb-2">
                <v-img src="/images/background/b001.jpg" alt="pozadí" max-height="100" ></v-img>
              </div>
           
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
    return {
      drawer: true,
      mini: true,
      barItems: [
        {
          title: "Pozadí",
          icon: "mdi-image-area"
        }
      ]
    };
  }
};
</script>

<style>
</style>