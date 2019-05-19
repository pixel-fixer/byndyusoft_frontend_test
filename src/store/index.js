import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
 
const state = {
    comments: [
        {
            id: 1,
            parent_id: 0,
            avatar: 'https://placeimg.com/64/64/people',
            name: 'Иван Иванович',
            date: moment().subtract(6, "days"), 
            rating: -2,
            text: 'текст комментария 1'
        },
        {
            id: 2,
            parent_id: 1,
            avatar: 'https://placeimg.com/64/64/nature',
            name: 'Петр Петрович',
            date: moment().subtract(2, "hours"),
            rating: 10,
            text: 'текст комментария 2'
        },
        {
            id: 3,
            parent_id: 2,
            avatar: 'https://placeimg.com/64/64/people',
            name: 'Петр Петрович',
            date: moment().subtract(25, "minutes"),
            rating: 10,
            text: 'текст комментария 3'
        },
        {
            id: 4,
            parent_id: 3,
            avatar: 'https://placeimg.com/64/64/people',
            name: 'Петр Петрович',
            date: moment().subtract(35, "minutes"),
            rating: 10,
            text: 'текст комментария 4'
        },
        {
            id: 5,
            parent_id: 4,
            avatar: 'https://placeimg.com/64/64/people',
            name: 'Петр Петрович',
            date: moment().subtract(45, "minutes"),
            rating: 10,
            text: 'текст комментария 5'
        },
    ]
}

export default new Vuex.Store({
    state,
    getters: {
        mappedComments: state => {
                 return state.comments.map( item => {
                return item
            })
        }
    },
    mutations: {
        CHANGE_COMMENT_RATING(state, {id, action}) {
            let el = state.comments.find(el => el.id == id)
            if(el){
                el.rating = action == 'add' ? el.rating + 1 : el.rating - 1
            }
        }
    },
    actions:{
        addComment({commit}) {

        }
    }
})