import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import router from './routers/routers'

Vue.config.productionTip = false
Vue.use(VueRouter)
axios.defaults.baseURL = process.env.VUE_APP_BASEURL;

new Vue({router,
  render: h => h(App),
}).$mount('#app')
