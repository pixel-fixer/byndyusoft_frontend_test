<template>
    <div class="comments content">
        <h2>Комментарии</h2>
        <div class="comment__list">
            <comment v-for="comment in nestedTreeComments" :comment="comment" :depth="0" :key="comment.id"></comment>
            <add-comment-form v-if="showForm" :parent-id="0"></add-comment-form>
        </div>
    </div>
</template>

<script>
import Comment from './comment.vue'
import { mapGetters } from 'vuex';
import AddCommentForm from './add_comment_form.vue'

export default {
    name: 'comments',
    data: function(){
        return {
            showForm: true
        }
    },
    components: {
        Comment,
        AddCommentForm
    },
    watch: {
        '$store.state.comments': function(){
            console.log('watch $store.state.comments')
        }
    },
    computed: {
        ...mapGetters(['nestedTreeComments']),
   
    },
    methods: {
        
    }
}
</script>
