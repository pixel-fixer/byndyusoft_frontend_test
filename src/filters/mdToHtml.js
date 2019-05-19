import Vue from 'vue';
import { Markdown } from './../services/markdown'

Vue.filter('mdToHtml', function(value) {
    if (value) {
      let md = new Markdown()
      return md.parse(value)
    }
})