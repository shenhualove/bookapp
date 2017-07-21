/**
 * Created by apple on 2017/7/20.
 *
 * 搜索
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    Platform
} from 'react-native';
import {connect} from 'react-redux';
import pxToDp   from '../util/px';
import * as actions from '../actions/search';
import BookListComponent from '../components/bookList';

class Main extends Component {
    static navigationOptions = {
        headerStyle:{
            backgroundColor:'#ffb307',
            height:pxToDp(Platform.OS === 'ios'?210:150)
        },
        headerTitle:'搜索',
        headerBackTitle:null,
        headerTintColor:"white",
    }

    //列表书籍点击
    listTab(id){
        this.props.navigation.navigate("BookInfo")
    }

    _keyExtractor = (item, index) => item.id+index;
    //渲染热门推荐书籍数据
    _renderItem = ({item})=>{
        return (
            <TouchableOpacity onPress={()=>this.listTab(item.id)}>
                <BookListComponent data={item} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <TextInput
                        placeholder="请输入关键词"
                        maxLength={40}
                        underlineColorAndroid="transparent"
                        style={styles.textInput}
                        value={this.props.search.input}
                    />
                    <TouchableOpacity onPress={()=>this.bookTab()}>
                        <Image
                            source={require("../images/login/sousuo.png")}
                            style={{width:pxToDp(54),height:pxToDp(54)}}
                            />
                    </TouchableOpacity>
                </View>
                <Text style={styles.findText}>没有找到您要的书籍哦～</Text>

                {/*<FlatList
                    style={styles.list}
                    data={this.props.search.list}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    />*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    search:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:pxToDp(48),
        borderBottomWidth:1,
        borderBottomColor:'#dcdcdc'
    },
    textInput:{
        borderRadius:pxToDp(12),
        backgroundColor:"#f2f2f2",
        height:pxToDp(120),
        width:pxToDp(870),
        fontSize:pxToDp(42),
        padding:0,
        paddingLeft:pxToDp(30)
    },
    list:{
        padding:pxToDp(40),
        paddingTop:0
    },
    findText:{
        fontSize:pxToDp(42),
        color:'#999',
        margin:pxToDp(40)
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

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default Search;