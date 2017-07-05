/**
 * Created by apple on 17/7/3.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableHighlight,
    ScrollView,
    Platform
} from 'react-native';
import pxToDp   from '../util/px';

const TestData = [
    {
        id:11,
        imgUrl:"",
        name:"外星失落的少女",
        author:"默默",
        info:"本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地球，最..."
    },
    {
        id:121,
        imgUrl:"",
        name:"外星失落的少女",
        author:"默默",
        info:"本是一个星球最尊贵的公主，却因为家族被掠夺者洗劫一空，而与亲人失去了联系，独自一人流落在一个荒岛之中，后来被神秘人阴差阳错的带往地球，最..."
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

class BookCity extends Component {
    static navigationOptions = {
        headerStyle:{
            backgroundColor:'#ffb307',
            height:pxToDp(Platform.OS === 'ios'?210:150)
        },
        headerTitleStyle:{
            color:'white'
        },
        headerRight:(
            <TouchableHighlight>
                <Image
                   source={require("../images/search.png")}
                   style={{width:pxToDp(54),height:pxToDp(54),marginRight:pxToDp(50)}}
                />
            </TouchableHighlight>
        ),
    }

    _keyExtractor = (item, index) => item.id+index;

    _renderItem = ({item})=>{
        return (
            <TouchableHighlight >
                <View key={item.id}  style={styles.listView}>
                    <Image
                        source={require('../images/column/test-2.jpg')}
                        style={styles.listImage}
                        />
                    <View style={styles.rightView}>
                        <Text style={styles.listName}>{item.name}</Text>
                        <Text style={styles.listAuthor}>作者: {item.author}</Text>
                        <Text style={styles.listInfo}>{item.info}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <ScrollView>
                {/*栏目分类*/}
                <View style={styles.columnWrap}>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                       <Image
                           source={require("../images/column/qihuan.jpg")}
                           style={styles.columnImage}
                        />
                        <Text style={styles.columnName}>玄幻魔法</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                        <Image
                            source={require("../images/column/gudai.jpg")}
                            style={styles.columnImage}
                            />
                        <Text style={styles.columnName}>耽美同人</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                        <Image
                            source={require("../images/column/dushi.jpg")}
                            style={styles.columnImage}
                            />
                        <Text style={styles.columnName}>都市言情</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                        <Image
                            source={require("../images/column/wuxia.jpg")}
                            style={styles.columnImage}
                            />
                        <Text style={styles.columnName}>武侠修真</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                        <Image
                            source={require("../images/column/youxi.jpg")}
                            style={styles.columnImage}
                            />
                        <Text style={styles.columnName}>游戏科幻</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                        <Image
                            source={require("../images/column/kongbu.jpg")}
                            style={styles.columnImage}
                            />
                        <Text style={styles.columnName}>恐怖灵异</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                        <Image
                            source={require("../images/column/chuanyue.jpg")}
                            style={styles.columnImage}
                            />
                        <Text style={styles.columnName}>穿越重生</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                        <Image
                            source={require("../images/column/junshi.jpg")}
                            style={styles.columnImage}
                            />
                        <Text style={styles.columnName}>历史军事</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                        <Image
                            source={require("../images/column/xiaoyuan.jpg")}
                            style={styles.columnImage}
                            />
                        <Text style={styles.columnName}>青春校园</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                        <Image
                            source={require("../images/column/lizhi.jpg")}
                            style={styles.columnImage}
                            />
                        <Text style={styles.columnName}>成功励志</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                        <Image
                            source={require("../images/column/mingzhu.jpg")}
                            style={styles.columnImage}
                            />
                        <Text style={styles.columnName}>传记名著</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.columnView}>
                        <Image
                            source={require("../images/column/dushi.jpg")}
                            style={styles.columnImage}
                            />
                        <Text style={styles.columnName}>其他</Text>
                    </View>
                </TouchableHighlight>
                </View>

                {/*热门推荐*/}
                <View style={styles.hotWrap}>
                    <View style={styles.hotTitle}>
                        <View style={styles.leftBorder}></View>
                        <Text style={styles.hotText}>热门推荐</Text>
                    </View>
                    <FlatList
                        style={styles.hotList}
                        data={TestData}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    columnWrap:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"row",
        flexWrap:"wrap",
        paddingBottom:pxToDp(40),
        marginBottom:pxToDp(30)
    },

    columnView:{
        marginTop:pxToDp(40),
        marginLeft:pxToDp(68),
        flexDirection:"column",
        alignItems:"center"
    },
    columnImage:{
        width:pxToDp(186),
        height:pxToDp(186),
    },
    columnName:{
        fontSize:pxToDp(38),
        color:"#666",
        marginTop:pxToDp(16)
    },
    hotWrap:{
        flex:1,
        backgroundColor:"white",
        padding:pxToDp(50),
        paddingBottom:pxToDp(25)
    },
    hotTitle:{
        flexDirection:"row",
        alignItems:"center"
    },
    leftBorder:{
        width:pxToDp(16),
        height:pxToDp(48),
        backgroundColor:"#ffb307",
        marginRight:pxToDp(30)
    },
    hotText:{
        fontSize:pxToDp(42),
        color:"#333"
    },
    listView:{
        marginTop:pxToDp(40),
        marginBottom:pxToDp(40),
        flexDirection:"row",
    },
    listImage:{
        width:pxToDp(200),
        height:pxToDp(266),
        marginRight:pxToDp(36)
    },
    rightView:{
        flexDirection:"column",
    },
    listName:{
        fontSize:pxToDp(42),
        color:"#333",
        marginTop:pxToDp(4),
        marginBottom:pxToDp(16)
    },
    listInfo:{
        fontSize:pxToDp(34),
        color:"#999",
        marginBottom:0
    },
    listAuthor:{
        fontSize:pxToDp(34),
        color:"#999",
        marginBottom:pxToDp(16)
    }

});

export default BookCity;