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