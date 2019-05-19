import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueSwal from 'vue-swal'

import "normalize.css"
import './styles/main.styl'

Vue.use(VueSwal)

import './filters/formatDate'
import './filters/dateDiffFormat'
import './filters/mdToHtml'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
