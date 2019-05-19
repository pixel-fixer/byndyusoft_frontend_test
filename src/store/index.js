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
            rating: 10,
            text: 'текст комментария 1'
        },
        {
            id: 2,
            parent_id: 1,
            avatar: 'https://placeimg.com/64/64/people',
            name: 'Петр Петрович',
            date: moment().subtract(2, "hours"),
            rating: 10,
            text: 'текст комментария 2'
        },
        {
            id: 3,
            parent_id: 0,
            avatar: 'https://placeimg.com/64/64/people',
            name: 'Петр Петрович',
            date: moment().subtract(25, "minutes"),
            rating: 10,
            text: 'текст комментария 2'
        },
    ]
}

export default new Vuex.Store({
    state,
    getters: {
        mappedComments: state => {
            return state.comments.map( item => {
                //item.date_diff =  moment(item.date).diff(new Date())
                return item
            })
        }
    },
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