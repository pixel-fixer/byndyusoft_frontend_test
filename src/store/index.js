import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

/**
 * @param Array arr 
 * @param Number parent 
 */
let setNestedArray = function(arr, parent){
    var out = []
  
    var clonedArray = JSON.parse(JSON.stringify(arr)) //avoid state mutation side effect
    for(var i in clonedArray) {
        
        if(clonedArray[i].parent_id == parent) {
            var children = setNestedArray(clonedArray, clonedArray[i].id)

            if(children.length) {
                clonedArray[i].children = children
            }
            out.push(clonedArray[i])
        }
    }
 
    return out
}

export default new Vuex.Store({
    state: {
        comments: [
            {
                id: 1,
                parent_id: 0,
                avatar: 'https://placeimg.com/64/64/people',
                name: 'Иван Иванович',
                date: moment().subtract(6, "days"), 
                rating: -2,
                text: 'текст комментария 1222S'
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
                name: 'CoolNickName',
                date: moment().subtract(25, "minutes"),
                rating: 10,
                text: 'текст комментария 3'
            },
            {
                id: 4,
                parent_id: 3,
                avatar: 'https://placeimg.com/64/64/people',
                name: 'Not So Cool Nick',
                date: moment().subtract(35, "minutes"),
                rating: 10,
                text: 'текст комментария 4'
            },
            {
                id: 5,
                parent_id: 0,
                avatar: 'https://placeimg.com/64/64/people',
                name: 'Билл Гейтс',
                date: moment().subtract(45, "minutes"),
                rating: 10,
                text: 'текст комментария 5 aaa'
            },
        ],
        oneTwo: 1
    },
    getters: {
        nestedTreeComments: state => {
            //return state.comments;
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
            comment.id = this.state.comments.length+2
            comment.rating = 0
            comment.avatar = 'https://placeimg.com/64/64/people'
            comment.date = moment().endOf('minute')
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