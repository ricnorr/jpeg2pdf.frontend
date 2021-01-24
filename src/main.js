import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import axios from 'axios';


axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
new Vue({
  render: h => h(App),
}).$mount('#app')
