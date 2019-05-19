<template>
    <div class="comments__item flex">
        <div class="comments__item__avatar">
            <img src="https://placeimg.com/64/64/people" alt="">
        </div>
        <div class="comments__item__content">
            <div class="comments__item__top-bar flex flex-center">
                <div class="comments__item__name mr-20 no-wrap">{{ comment.name }}</div>
                <div class="comments__item__date mr-20 no-wrap">{{ comment.date | dateDiffFormat }}</div>
                
                <div class="comments__item__vote flex">
                    <div class="comments__item__vote__action">+</div>
                    <div class="comments__item__vote__rating">{{comment.rating}}</div>
                    <div class="comments__item__vote__action">&mdash;</div>                        
                </div>

                <div class="flex-push"></div>
                <a href="">Ответить</a>
            </div>
            <div class="comments__item__text">
                Adipisicing ea laborum laboris qui dolore id deserunt Lorem fugiat. Nisi excepteur ullamco esse ut et excepteur velit sunt id enim occaecat dolore. Excepteur nisi sunt ut qui excepteur anim ea aliquip amet. Commodo eiusmod et cupidatat dolor aliqua. Incididunt proident aute voluptate sint. Enim et do voluptate amet amet in non cillum.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comment',
    props: ['comment']
}
</script>

<style>

</style>
