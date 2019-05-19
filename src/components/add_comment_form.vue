<template>
    <div class="form" @submit.prevent="submitComment">
        <form ref="form">
            <div class="form__group">
                <div class="form__group__header">Добавить комментарий</div>
            </div>
            <div class="form__group">
                <div class="form__group__col">
                    <label for="form_name">Имя</label>
                </div>
                <input id="form_name" class="form__input" type="text" v-model="comment.name" required>
            </div>
            <div class="form__group">
                 <div class="form__group__col">
                <label for="form_email">E-mail</label>
                 </div>
                <input id="form_email" class="form__input" type="email" v-model="comment.email" required>
            </div>
            <div class="form__group">
                <div class="form__group__col">
                    <label for="form_text">Текст комментария</label>
                </div>
                <textarea v-model="comment.text"
                        id="form_text"
                        class="form__input form__input--textarea"
                        cols="30"
                        rows="10"
                        required></textarea>
            </div>
            <div class="form__group">
                <div class="form__group__col"></div>
                <button type="submit">Добавить комментарий</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: ['parentId'],
    name: 'add-comment-form',
    data: function(){
        return {
            comment: {
                name: '',
                email: 'mail@mail.ru',
                text: '',
                parent_id: this.parentId
            }
        }
    },
    methods: {
        submitComment(){
            this.$store.commit('addComment', Object.assign({}, this.comment))
            this.formReset()
        },
        formReset(){
            this.comment.name = ''
            this.comment.email = ''
            this.comment.text = ''
            this.$refs.form.reset()
        }
    }
}
</script>

<style>

</style>
