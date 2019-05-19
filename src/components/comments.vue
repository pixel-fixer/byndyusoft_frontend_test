<template>
    <div class="comments content">
        <h2>Комментарии</h2>
        <div class="comment__list">
            <comment v-for="comment in mappedComments" :comment="comment"></comment>
        </div>
    </div>
</template>

<script>
import Comment from './comment.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'comments',
    components: {
        Comment
    },
    computed: {
        ...mapGetters(['mappedComments'])
    }
}
</script>
