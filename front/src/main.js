import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true })

window.Vue = Vue;
Vue.config.productionTip = false


var app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
