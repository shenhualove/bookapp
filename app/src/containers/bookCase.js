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
    Platform
} from 'react-native';
import pxToDp   from '../util/px';

const TestData = [
                   {
                    id:11,
                    name:"杀破狼",
                    readInfo:"尚未阅读"
                   },
                    {
                        id:11,
                        name:"杀破狼",
                        readInfo:"阅读至第11章"
                    },
                    {
                        id:11,
                        name:"杀破狼",
                        readInfo:"尚未阅读"
                    },
                    {
                        id:11,
                        name:"杀破狼",
                        readInfo:"尚未阅读"
                    },
                    {
                        id:11,
                        name:"杀破狼",
                        readInfo:"尚未阅读"
                    },
                    {
                        id:11,
                        name:"杀破狼",
                        readInfo:"尚未阅读"
                    },
                    {
                        id:11,
                        name:"杀破狼",
                        readInfo:"尚未阅读"
                    },
                    {
                        id:"last"
                    }
                ]

class BookCase extends Component {
    static navigationOptions = {
        headerStyle:{
            backgroundColor:'#ffb307',
            height:pxToDp(Platform.OS === 'ios'?210:150)
        },
        headerTitleStyle:{
            color:'white'
        },
    }

    _tab(){
        this.props.navigation.navigate("Login")
    }

    _keyExtractor = (item, index) => item.id+index;

    _renderItem = ({item})=>{
        if(item.id === 'last'){
            return (
                <TouchableHighlight onPress={()=>this._tab(item.id)}>
                <View key={item.id}  style={styles.bookView}>
                     <View style={styles.last}>
                         <Image
                           source={require('../images/book-add.png')}
                           style={styles.bookAdd}
                         />
                     </View>
                </View>
                </TouchableHighlight>
            )
        }
        return (
            <TouchableHighlight onPress={()=>this._tab(item.id)}>
            <View key={item.id}  style={styles.bookView}>
                    <Image
                       source={require('../images/book-test.jpg')}
                       style={styles.bookImage}
                     />
                    <Text style={styles.bookName}>{item.name}</Text>
                    <Text style={styles.readInfo}>{item.readInfo}</Text>
            </View>
            </TouchableHighlight>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.wrap}
                    data={TestData}
                    keyExtractor={this._keyExtractor}
                    numColumns={3}
                    renderItem={this._renderItem}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#eee"
    },
    bookView:{
       marginTop:pxToDp(40),
       marginLeft:pxToDp(45)
    },
    last:{
        backgroundColor:"white",
        width:pxToDp(300),
        height:pxToDp(400),
        borderRadius:pxToDp(12),
        overflow:"hidden",
        alignItems:"center",
        justifyContent:"center"
    },
    bookImage:{
        width:pxToDp(300),
        height:pxToDp(400),
        borderRadius:pxToDp(12),
        overflow:"hidden"
    },
    bookName:{
        fontSize:pxToDp(40),
        color:"#666",
        marginTop:pxToDp(16),
        marginBottom:pxToDp(8)
    },
    readInfo:{
        fontSize:pxToDp(34),
        color:"#aaa",
        marginBottom:0
    },
    bookAdd:{
        width:pxToDp(104),
        height:pxToDp(110)
    }
});

export default BookCase;