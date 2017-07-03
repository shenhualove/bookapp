/**
 * Created by apple on 17/7/3.
 */
const initState = {
    kk:'books'
}

function main(state = initState,action){
    switch (action.type){
        case "HANDLE":
            return Object.assign({},state,action.data)
        default :
            return state
    }
}

export default  main;