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
                avatar: 'https://i.pravatar.cc/64?img=1',
                name: 'Иван Иванович',
                date: moment().subtract(6, "days"), 
                rating: -2,
                text: 'Sint eiusmod minim irure do proident aliquip dolor tempor pariatur officia exercitation ullamco do.'
            },
            {
                id: 2,
                parent_id: 1,
                avatar: 'https://i.pravatar.cc/64?img=2',
                name: 'Петр Петрович',
                date: moment().subtract(2, "hours"),
                rating: 10,
                text: 'Commodo nostrud reprehenderit sint do excepteur laborum ea.'
            },
            {
                id: 3,
                parent_id: 2,
                avatar: 'https://i.pravatar.cc/64?img=3',
                name: 'CoolNickName',
                date: moment().subtract(25, "minutes"),
                rating: 10,
                text: 'Ipsum sint incididunt consequat ullamco elit duis occaecat excepteur sunt cupidatat.'
            },
            {
                id: 4,
                parent_id: 3,
                avatar: 'https://i.pravatar.cc/64?img=4',
                name: 'Not So Cool Nick',
                date: moment().subtract(35, "minutes"),
                rating: -7,
                text: 'Cupidatat in magna quis laborum proident voluptate irure voluptate qui voluptate.'
            },
            {
                id: 5,
                parent_id: 0,
                avatar: 'https://i.pravatar.cc/64?img=5',
                name: 'Билл Гейтс',
                date: moment().subtract(45, "minutes"),
                rating: 10,
                text: 'Esse magna irure nostrud ipsum dolore fugiat culpa officia veniam adipisicing elit.'
            },
        ]
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
            comment.avatar = 'https://i.pravatar.cc/64?img=' + comment.id
            comment.date = moment().endOf('minute')
            state.comments.push(comment)
        }
    }
})