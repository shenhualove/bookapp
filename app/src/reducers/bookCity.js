/**
 * Created by apple on 2017/7/17.
 *
 * 书城
 */
const initialSate = {
    columnList:[
        {
            id:1,
            imgUrl:require("../images/column/qihuan.jpg"),
            name:"玄幻魔法"
        },
        {
            id:2,
            imgUrl:require("../images/column/gudai.jpg"),
            name:"耽美同人"
        },
        {
            id:3,
            imgUrl:require("../images/column/dushi.jpg"),
            name:"都市言情"
        },
        {
            id:4,
            imgUrl:require("../images/column/wuxia.jpg"),
            name:"武侠修真"
        },
        {
            id:5,
            imgUrl:require("../images/column/youxi.jpg"),
            name:"游戏科幻"
        },
        {
            id:6,
            imgUrl:require("../images/column/kongbu.jpg"),
            name:"恐怖灵异"
        },
        {
            id:7,
            imgUrl:require("../images/column/chuanyue.jpg"),
            name:"穿越重生"
        },
        {
            id:8,
            imgUrl:require("../images/column/junshi.jpg"),
            name:"历史军事"
        },
        {
            id:9,
            imgUrl:require("../images/column/xiaoyuan.jpg"),
            name:"青春校园"
        },
        {
            id:10,
            imgUrl:require("../images/column/lizhi.jpg"),
            name:"成功励志"
        },
        {
            id:11,
            imgUrl:require("../images/column/mingzhu.jpg"),
            name:"传记名著"
        },
        {
            id:12,
            imgUrl:require("../images/column/dushi.jpg"),
            name:"其他"
        }
    ],
    hotList:[
        {
            id:11,
            imgUrl:"",
            name:"外星失落的少女",
            author:"默默",
            info:"本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地球，最..."
        },
        {
            id:121,
            imgUrl:"",
            name:"外星失落的少女",
            author:"默默",
            info:"本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地球，本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地最..."
        },
        {
            id:131,
            imgUrl:"",
            name:"外星失落的少女",
            author:"默默",
            info:"本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地球，最..."
        },
        {
            id:141,
            imgUrl:"",
            name:"外星失落的少女",
            author:"默默",
            info:"本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地球，最..."
        },
        {
            id:151,
            imgUrl:"",
            name:"外星失落的少女",
            author:"默默",
            info:"本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地球，最..."
        },
        {
            id:161,
            imgUrl:"",
            name:"外星失落的少女",
            author:"默默",
            info:"本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地球，最..."
        },
        {
            id:11,
            imgUrl:"",
            name:"外星失落的少女",
            author:"默默",
            info:"本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地球，最..."
        },
        {
            id:171,
            imgUrl:"",
            name:"外星失落的少女",
            author:"默默",
            info:"本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地球，最..."
        }

    ]
}

function bookCity(state = initialSate,action){
    switch (action.type){
        case "BOOK_CITY_HANDLE":
            return Object.assign({},state,action.data)

        default :
            return state
    }
}

export default bookCity;