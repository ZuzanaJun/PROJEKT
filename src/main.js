import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { Drag, Drop } from 'vue-drag-drop';

Vue.component('drag', Drag);
Vue.component('drop', Drop);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
