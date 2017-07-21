/**
 * Created by apple on 2017/7/17.
 *
 *书架
 */
const initialSate = {
    list:[
        {
            id:11,
            name:"杀破狼",
            readInfo:"尚未阅读"
        },
        {
            id:11,
            name:"杀破狼",
            readInfo:"阅读至第11章"
        },
        {
            id:11,
            name:"杀破狼",
            readInfo:"尚未阅读"
        },
        {
            id:11,
            name:"杀破狼",
            readInfo:"尚未阅读"
        },
        {
            id:11,
            name:"杀破狼",
            readInfo:"尚未阅读"
        },
        {
            id:11,
            name:"杀破狼",
            readInfo:"尚未阅读"
        },
        {
            id:11,
            name:"杀破狼",
            readInfo:"尚未阅读"
        },
        {
            id:"last"
        }
    ]
}

function bookCase(state = initialSate,action){
    switch (action.type){
        case "BOOK_CASE_HANDLE":
            return Object.assign({},state,action.data)

        default :
            return state
    }
}

export default bookCase;