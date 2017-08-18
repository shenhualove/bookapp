const router = require('koa-router')();
const mySql  = require('../util/mysql');

router.get('/getBookList', async (ctx, next) => {
  let name  = ctx.request.query.name;
  let curPage = ctx.request.query.nowPage;
  let pageSize = ctx.request.query.pageSize;
  var sql="select * from `book_list` where book_type = '"+name+"' order by id asc LIMIT "+
  (curPage-1)*pageSize+','+pageSize;
  let result = await mySql.query(sql);
  let arr = [];
  for(let i=0;i<result.length;i++){
     arr.push({
       id:result[i].id,
       name:result[i].name,
       imgUrl:result[i].thumb_img,
       author:result[i].author,
       info:result[i].desc
     })
  }

  ctx.body = {
    status: 1,
    data: arr,
  }
})

router.get('/getHotList', async (ctx, next) => {
  var sql="select * from `book_list`  order by rand() limit 10";
  let result = await mySql.query(sql);
  let arr = [];
  for(let i=0;i<result.length;i++){
    arr.push({
      id:result[i].id,
      name:result[i].name,
      imgUrl:result[i].thumb_img,
      author:result[i].author,
      info:result[i].desc
    })
  }

  ctx.body = {
    status: 1,
    data: arr,
  }
})

router.get('/getLoveList', async (ctx, next) => {
  var sql="select * from `book_list`  order by rand() limit 10";
  let result = await mySql.query(sql);
  let arr = [];
  for(let i=0;i<result.length;i++){
    arr.push({
      id:result[i].id,
      name:result[i].name,
      imgUrl:result[i].thumb_img,
      author:result[i].author,
      info:result[i].desc
    })
  }

  ctx.body = {
    status: 1,
    data: arr,
  }
})

router.get('/getBookInfo', async (ctx, next) => {
  let id  = ctx.request.query.id;
  var sql="select * from `book_list` where id = "+id;
  let result = await mySql.query(sql);
  let arr = [];
  console.log(result)
  for(let i=0;i<result.length;i++){
    arr.push({
      id:result[i].id,
      name:result[i].name,
      imgUrl:result[i].thumb_img,
      author:result[i].author,
      info:result[i].desc,
      chapter:'一百九十八'
    })
  }
  ctx.body = {
    status: 1,
    data: arr[0],
  }
})

router.post('/searchBook', async (ctx, next) => {
  let searchVal  = ctx.request.body.val;
  var sql="select * from `book_list` where `name` like '%"+searchVal+"%'  order by id desc";
  let result = await mySql.query(sql);
  let arr = [];
  for(let i=0;i<result.length;i++){
    arr.push({
      id:result[i].id,
      name:result[i].name,
      imgUrl:result[i].thumb_img,
      author:result[i].author,
      info:result[i].desc
    })
  }
  ctx.body = {
    status:1,
    data:arr
  }
})

router.get('/getBookChapter', async (ctx, next) => {
  let id  = ctx.request.query.id;
  var sql="select * from `book_content`  where `column` ="+id+" order by id asc"
  let result = await mySql.query(sql);
  if(result.length>0){
    ctx.body = {
      status: 1,
      data:result
    }
  }else{
    ctx.body = {
      status: 1,
      data:{
        content:'',
        title:''
      }
    }
  }
})

router.get('/getBookDetails', async (ctx, next) => {
  let id  = ctx.request.query.id;
  let pid  = ctx.request.query.pid;
  var sql="select * from `book_content`  where `column` ="+id+" and `pid` ="+pid;
  let result = await mySql.query(sql);
  if(result.length>0){
    ctx.body = {
      status: 1,
      data:{
        content:result[0].content,
        title:result[0].name
      }
    }
  }else{
    ctx.body = {
      status: 1,
      data:{
        content:'',
        title:''
      }
    }
  }

})

router.get('/downBook', async (ctx, next) => {
  let id  = ctx.request.query.id;
  var sql="select `id`,`name`,`pid`,`content`,`column` from `book_content`  where `column` ="+id+" order by pid asc";
  var csql="select * from `book_list`  where `id` ="+id;
  let column = await mySql.query(csql);
  let result = await mySql.query(sql);
  if(result.length>0){
    ctx.body = {
      status: 1,
      data:{
        content:result,
        book:column[0]
      }
    }
  }else{
    ctx.body = {
      status: 1,
      data:{
        content:[],
        book:column[0]
      }
    }
  }

})

router.get('/searchBook', async (ctx, next) => {
  ctx.body = {
    status:1,
    data:{

    }
  }
})

router.post('/login', async (ctx, next) => {
  ctx.body = {
    status:1,
    data:{

    }
  }
})

router.post('/logOut', async (ctx, next) => {
  ctx.body = {
    status:1,
    data:{

    }
  }
})

router.post('/sendSmsCode', async (ctx, next) => {
  ctx.body = {
    status:1,
    data:{

    }
  }
})


module.exports = router
