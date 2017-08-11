/**
 * Created by apple on 2017/7/17.
 *
 * 小说阅读页
 */
import Fetch from '../util/fetch';

export function handle(data){
    return {
        type:"BOOK_READ_HANDLE",
        data
    }
}

//获取章节内容
export function getBookDetails(options){
    return dispatch => {
        dispatch(handle({
            loading:true,
            chapter:options.pid
        }))

        Fetch({
            url:"bookDetails",
            type:"GET",
            data:options,
            success:function(data){
                if(data.status==1){
                    console.log(data)
                    dispatch(handle({
                        content:data.data.content,
                        title:data.data.title,
                        loading:false
                    }))
                }
            }
        })
    }
}