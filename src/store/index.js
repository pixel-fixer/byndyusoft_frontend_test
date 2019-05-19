import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
    coments: [
        {
            id: 1,
            parent_id: 0,
            avatar: 'https://placeimg.com/64/64/people',
            name: 'Иван Иванович',
            date: new Date(+(new Date()) - Math.floor(Math.random()*10000000000)),
            rating: 10,
            text: 'текст комментария'
        }
    ]
}

export default new Vuex.Store({
    state,
    mutations: {
        ADD_COMMENT(state, comment) {
            state.coments.push(comment)
        }
    },
    actions:{
        addComment({commit}) {

        }
    }
})