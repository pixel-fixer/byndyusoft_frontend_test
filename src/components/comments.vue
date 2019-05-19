<template>
    <div class="comments content">
        <h2>Комментарии</h2>
        <comment></comment>
        <comment></comment>
        <comment></comment>
    </div>
</template>

<script>
import Comment from './comment.vue'

export default {
    name: 'comments',
    components: {
        Comment
    }
}
</script>
