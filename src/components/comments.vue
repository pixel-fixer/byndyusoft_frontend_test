<template>
    <div class="comments content">
        <h2>Комментарии</h2>
        <div class="comment__list">
            <transition-group name="fade">
                <comment v-for="comment in nestedTreeComments" :comment="comment" :depth="0" :key="comment.id"></comment>
            </transition-group>
            <transition name="fade">
                <add-comment-form v-if="showForm" :parent-id="0" :key="1"></add-comment-form>
                <a v-else href="" @click.prevent="openForm" :key="2">Написать комментарий</a>
            </transition>
        </div>
    </div>
</template>

<script>
import Comment from './comment.vue'
import { mapGetters } from 'vuex';
import AddCommentForm from './add_comment_form.vue'
import EventBus from './../services/event-bus'

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
    mounted () {
         EventBus.$on('CLOSE_ALL_FORMS', () => {
            this.showForm = false
         }); 
         EventBus.$on('RERENDER_COMMENTS', () => {
             this.$forceUpdate()
             this.showForm = true;
         });
    },
    watch: {
        '$store.state.comments': function(){
            console.log('watch $store.state.comments')
        }
    },
    computed: {
        ...mapGetters(['nestedTreeComments', 'mappedoneTwo'])
    },
    methods: {
       openForm(){
            EventBus.$emit('CLOSE_ALL_FORMS');
            this.showForm = true;
        }
    }
}
</script>
