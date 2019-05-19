import Vue from 'vue';
import moment from 'moment'

/**
 * Или можно использовать moment().fromNow() c соответствующей локализацией
 */
Vue.filter('dateDiffFormat', function(value) {
    if (value) {
      value = moment(value);
      let ms  = Math.abs( moment(value).diff(new Date()) )
      if(ms <= 3600000){
        const m = moment( value.diff(moment()) ).format('m');
        return ( m == 0 ? 1 : m ) + ' минут назад'
      }else if( ms <= 86400000){
        return moment( value.diff(moment()) ).format('H') + ' часов назад'
      }else{
        return ( moment( moment().diff(value)).format('D') - 1 ) + ' дней назад'
      } 
    }
})