import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

import "normalize.css"
import './styles/main.styl'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
