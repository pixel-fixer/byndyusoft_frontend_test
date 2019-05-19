<template>
  <div id="app">
    <div class="container">
      <single-article></single-article>
      <comments></comments>
    </div>
  </div>
</template>

<script>
import SingleArticle from './components/article.vue'
import Comments from './components/comments.vue'

export default {
  name: 'app',
  components: {
    SingleArticle,
    Comments
  }
}
</script>

