<template>
    <div class="comments__item flex">
        <template v-if="showComment">
            <div class="comments__item__avatar">
                <img src="https://placeimg.com/64/64/people" alt="">
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
                    <a href="">Ответить</a>
                </div>
                <div class="comments__item__text">
                    Adipisicing ea laborum laboris qui dolore id deserunt Lorem fugiat. Nisi excepteur ullamco esse ut et excepteur velit sunt id enim occaecat dolore. Excepteur nisi sunt ut qui excepteur anim ea aliquip amet. Commodo eiusmod et cupidatat dolor aliqua. Incididunt proident aute voluptate sint. Enim et do voluptate amet amet in non cillum.
                </div>
            </div>
        </template>
        <div  v-else @click.prevent="userWhantToShowComment = true"><a href=""> Открыть комментарий</a></div>
    </div>
</template>

<script>
export default {
    name: 'comment',
    props: ['comment'],
    data: function(){
        return {
            userWhantToShowComment: false
        }
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
        }
    }
}
</script>

<style>

</style>
