<template>
    <div class="comments__item">
        <template v-if="showComment">
            <div class="flex">
                <div class="comments__item__avatar">
                    <img :src="comment.avatar" alt="">
                </div>
                <div class="comments__item__content" >
                    <div class="comments__item__top-bar flex flex-center">
                        <div class="comments__item__name mr-20 no-wrap">{{ comment.name }}</div>
                        <div class="comments__item__date mr-20 no-wrap">{{ comment.date | dateDiffFormat }}</div>
                        <div class="comments__item__vote flex">
                            <div class="comments__item__vote__action" @click="changeRaging(comment.id, 'add')">+</div>
                            <div class="comments__item__vote__rating" :class="{'bad': comment.rating < 0}">{{comment.rating}}</div>
                            <div class="comments__item__vote__action" @click="changeRaging(comment.id, 'sub')">&mdash;</div>                        
                        </div>
                        <div class="flex-push"></div>
                        <a href="" @click.prevent="openForm" class="comments__item__answer">Ответить</a>
                    </div>
                    <div class="comments__item__text" v-html="$options.filters.mdToHtml(comment.text)"></div>
                </div>
            </div>
            <transition name="fade">
                <add-comment-form v-if="showForm" :parent-id="comment.id" ></add-comment-form>
            </transition>
        </template>
        <div  v-else @click.prevent="userWhantToShowComment = true"><a href="">Открыть комментарий</a></div>
        <div class="comments__item__children__wrap" v-if="comment.children">
            <a href="" @click.prevent="(showChildren = !showChildren)" class="comments__item__children__show">
                {{ showChildren ? 'Свернуть' : 'Показать' }}
            </a>
            <div class="comments__item__children"
                :class="{'ml-20': depth <= 2}"
                v-if="showChildren">
                <comment v-for="c in comment.children" :comment="c" :depth="depth + 1" :key="c.id"></comment>
            </div>
        </div>
    </div>
</template>

<script>
import AddCommentForm from './add_comment_form.vue'
import EventBus from './../services/event-bus'

export default {
    name: 'comment',
    props: ['comment', 'depth'],
    components: {
        AddCommentForm
    },
    data: function(){
        return {
            userWhantToShowComment: false,
            showForm: false,
            showChildren: true
        }
    },
    mounted () {
         EventBus.$on('CLOSE_ALL_FORMS', () => {
             this.showForm = false
         });
         EventBus.$on('RERENDER_COMMENTS', () => {
             this.showForm = false
             this.$forceUpdate()
         });
    },
    computed: {
        'showComment': function(){
            if( (this.comment.rating <= -10 && this.userWhantToShowComment == true )
                || this.comment.rating > -10){
                return true;
            }else{
                return false
            }
        }
    },
    methods: {
        changeRaging(id, action){
            this.$store.commit('CHANGE_COMMENT_RATING', {id: id, action: action})
        },
        openForm(){
            EventBus.$emit('CLOSE_ALL_FORMS');
            this.showForm = true;
        }
    }
}
</script>

<style>

</style>
