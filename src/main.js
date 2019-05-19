import Vue from 'vue'
import App from './App.vue'
import store from './store'
import moment from 'moment'
import { Markdown } from './services/markdown'

import "normalize.css"
import './styles/main.styl'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
})

/**
 * Или можно использовать moment().fromNow() c соответствующей локализацией
 */
Vue.filter('dateDiffFormat', function(value) {
  if (value) {
    let ms  = Math.abs( moment(value).diff(new Date()) )
     if(ms <= 3600000){
      return moment( value.diff(moment()) ).format('m') + ' минут назад'
    }else if( ms <= 86400000){
      return moment( value.diff(moment()) ).format('H') + ' часов назад'
    }else{
      return (moment( moment().diff(value)).format('D') - 1) + ' дней назад'
    } 
  }
})

Vue.filter('mdToHtml', function(value) {
  if (value) {
    let md = new Markdown()
    return md.parse(value)
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
