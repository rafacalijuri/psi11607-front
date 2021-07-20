import Vue from 'vue';
import App from './App.vue';

import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueApexCharts from 'vue-apexcharts'
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
