<template>
    <div class="comments content">
        <h2>Комментарии</h2>
        <div class="comment__list">
            <comment v-for="comment in nestedComments" :comment="comment" :depth="0"></comment>
            <add-comment-form v-if="showForm"></add-comment-form>
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
    computed: {
        ...mapGetters(['mappedComments']),
        nestedComments(){
            return this.getTreeComments(this.$store.state.comments, 0)
        }
    },
    methods: {
        getTreeComments(arr, parent){
            var out = []
            for(var i in arr) {
                if(arr[i].parent_id == parent) {
                    var children = this.getTreeComments(arr, arr[i].id)

                    if(children.length) {
                        arr[i].children = children
                    }
                    out.push(arr[i])
                }
            }
            return out
        }
    }
}
</script>
