/**
 * Created by apple on 17/7/4.
 *
 * 书籍详情页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView,
    Platform,
    Button
} from 'react-native';
import {connect} from 'react-redux';
import pxToDp   from '../util/px';
import * as actions from '../actions/bookInfo';
import BookListComponent from '../components/bookList';

class Main extends Component {
    static navigationOptions = {
        headerStyle:{
            backgroundColor:'#ffb307',
            height:pxToDp(Platform.OS === 'ios'?210:150)
        },
        headerTitleStyle:{
            color:'white'
        },
        headerBackTitle:null,
        headerTintColor:"white",
        headerTitle:"大宋提刑官"
    }

    //书籍点击
    bookTab(id){
        this.props.navigation.navigate("BookInfo",{name:"玄幻武侠"})
    }

    //阅读书籍
    readTab(){
        this.props.navigation.navigate("BookRead",{name:"玄幻武侠"})
    }

    //加入书架
    addTab(){

    }

    _keyExtractor = (item, index) => item.id+index;
    //渲染热门推荐书籍数据
    _renderItem = ({item})=>{
        return (
            <TouchableOpacity onPress={()=>this.bookTab(item.id)}>
                <BookListComponent data={item} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView>
                {/*栏目分类*/}
                <View style={styles.columnWrap}>
                    <View style={styles.listView}>
                        <Image
                            source={require('../images/column/test-2.jpg')}
                            style={styles.listImage}
                        />
                        <View style={styles.rightView}>
                            <Text style={styles.listName}>外形实录的少铝</Text>
                            <Text style={styles.listAuthor}>作者: 神话</Text>
                            <Text style={styles.listInfo} >章节: 共二十四章</Text>
                            <View style={styles.btnView}>
                                <TouchableOpacity
                                    style={styles.addBtn}
                                    onPress={()=>this.addTab()}
                                >
                                    <Text style={styles.addBtnText}>加入书架</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.readBtn}
                                    onPress={()=>this.readTab()}
                                >
                                    <Text style={styles.readBtnText}>开始阅读</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/*内容介绍*/}
                <View style={styles.hotWrap}>
                    <View style={styles.hotTitle}>
                        <View style={styles.leftBorder}></View>
                        <Text style={styles.hotText}>图书简介</Text>
                    </View>
                    <View>
                        <Text style={styles.content}>
                            此处放置图书内容简介，此处放置图书内容简介此处放置图书内容简介，此处放置图书内容简介此处放置图书内容简介此处放置图书内容简介。此处放置图书内容简介此处放置图书内容简介。此处放置图书内容简介此处放置图书内容简介，此处放置图书内容简介......
                        </Text>
                    </View>
                </View>

                {/*猜你喜欢*/}
                <View style={styles.hotWrap}>
                    <View style={styles.hotTitle}>
                        <View style={styles.leftBorder}></View>
                        <Text style={styles.hotText}>猜你喜欢</Text>
                    </View>
                    <FlatList
                        style={styles.hotList}
                        data={this.props.bookInfo.loveList}
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
        backgroundColor:"white",
    },

    listView:{
        padding:pxToDp(50),
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"#dcdcdc"
    },
    listImage:{
        width:pxToDp(280),
        height:pxToDp(380),
        marginRight:pxToDp(40)
    },
    rightView:{
        flexDirection:"column",
        flex:1
    },
    listName:{
        fontSize:pxToDp(50),
        color:"#333",
        marginTop:pxToDp(4),
        marginBottom:pxToDp(16)
    },
    listInfo:{
        fontSize:pxToDp(40),
        color:"#999",
        lineHeight:pxToDp(44),
        marginBottom:0,
    },
    listAuthor:{
        fontSize:pxToDp(40),
        color:"#999",
        marginBottom:pxToDp(16)
    },
    hotWrap:{
        flex:1,
        backgroundColor:"white",
        padding:pxToDp(50),
        paddingBottom:pxToDp(25),
        marginTop:pxToDp(30)
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
    content:{
        lineHeight:pxToDp(70),
        fontSize:pxToDp(40),
        color:"#999",
        marginTop:pxToDp(15)
    },
    btnView:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:pxToDp(66)
    },
    addBtn:{
        borderWidth:1,
        borderColor:"#ffb307",
        padding:pxToDp(60),
        paddingTop:pxToDp(36),
        paddingBottom:pxToDp(36),
        borderRadius:pxToDp(12),
    },
    readBtn:{
        backgroundColor:"#ffb307",
        padding:pxToDp(60),
        paddingTop:pxToDp(36),
        paddingBottom:pxToDp(36),
        borderRadius:pxToDp(12),
    },
    addBtnText:{
        color:"#ffb307"
    },
    readBtnText:{
        color:"white"
    }
});

function mapStateToProps(state){
    return state;
}


function mapDispatchToProps(dispatch){
    return {
        _handle:(options)=>{
            dispatch(actions.handle(options))
        },
    }
}

const BookInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);


export default BookInfo;