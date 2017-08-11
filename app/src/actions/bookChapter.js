/**
 * Created by apple on 2017/8/10.
 *
 * 小说目录列表
 */
import Fetch from '../util/fetch';

export function handle(data){
    return {
        type:"BOOK_CHAPTER_HANDLE",
        data
    }
}

//获取目录列表
export function getChapter(options){
    return dispatch => {
        dispatch(handle({
            loading:true
        }))

        Fetch({
            url:"getChapter",
            type:"GET",
            data:{
                id:options.id
            },
            success:function(data){
                if(data.status==1){
                    dispatch(handle({
                        list:data.data,
                        loading:false
                    }))
                }
            }
        })
    }
}
