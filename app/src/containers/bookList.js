/**
 * Created by apple on 17/7/3.
 *
 * 书籍列表页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
import {connect} from 'react-redux';
import pxToDp   from '../util/px';
import * as actions from '../actions/bookList';
import BookListComponent from '../components/bookList';

class Main extends Component {
    static navigationOptions = {
        headerStyle:{
            backgroundColor:'#ffb307',
            height:pxToDp(Platform.OS === 'ios'?210:150)
        },
        headerTitle:({ state }) => `${state.params.name}`,
        headerTintColor:"white",
        headerBackTitle:null,
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

    componentDidMount() {
        var {setParams} = this.props.navigation;
        console.log(this.props.navigation)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={this.props.bookList.list}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    list:{
        padding:pxToDp(40),
        paddingTop:0
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

const BookList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default BookList;