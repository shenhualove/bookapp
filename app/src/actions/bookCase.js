/**
 * Created by apple on 2017/7/17.
 *
 * 书架
 */
const Realm = require('realm');
import * as RM from '../util/realm';

export function handle(data){
    return {
        type:"BOOK_CASE_HANDLE",
        data
    }
}

//获取本地书架列表
export function getBookCase(){
    return dispatch => {
        Realm.open({schema: [RM.BookSchema,RM.ContentSchema],schemaVersion: RM.version})
            .then(realm => {
                let list = realm.objects('Book');
                let arr = [];
                for(let i=0;i<list.length;i++){
                    arr.push(list[i])
                }
                arr.push({id:'last'})
                dispatch(handle({
                    list:arr
                }))
        });
    }
}