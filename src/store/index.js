import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
 
let setNestedArray = function(arr, parent){
    var out = []
    var arr = Object.assign({},arr)
    
    for(var i in arr) {
        if(arr[i].parent_id == parent) {
            var children = setNestedArray(arr, arr[i].id)

            if(children.length) {
                arr[i].children = children
            }
            out.push(arr[i])
        }
    }

    return out
}

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
            parent_id: 0,
            avatar: 'https://placeimg.com/64/64/people',
            name: 'Петр Петрович',
            date: moment().subtract(45, "minutes"),
            rating: 10,
            text: 'текст комментария 5 aaa '
        },
    ]
}

export default new Vuex.Store({
    state,
    getters: {
        nestedTreeComments: state => {
            return setNestedArray(state.comments, 0)
        }
    },
    mutations: {
        CHANGE_COMMENT_RATING(state, {id, action}) {
            let el = state.comments.find(el => el.id == id)
            if(el){
                el.rating = action == 'add' ? el.rating + 1 : el.rating - 1
            }
        },
        addComment(state, comment){
            console.log(comment)
            comment.id = this.state.comments.length+2
            comment.rating = 0
            comment.avatar = 'https://placeimg.com/64/64/people'
            comment.date = moment()
            state.comments.push(comment)
        }
    },
    actions:{
        /*addComment({commit}, comment) {
 
            console.log('addComment')
            commit('ADD_NEW_COMMENT', comment)
        }*/
    }
})