/**
 * Created by apple on 2017/7/17.
 *
 * 书籍列表页
 */
import Fetch from '../util/fetch';

export function handle(data){
    return {
        type:"BOOK_LIST_HANDLE",
        data
    }
}

//获取当前分类列表
export function getList(options){
    return dispatch => {
        Fetch({
            url:"getList",
            type:"GET",
            data:options,
            success:function(data){
                if(data.status==1){
                    dispatch(handle({
                        list:data.data
                    }))
                }
            }
        })
    }
}
