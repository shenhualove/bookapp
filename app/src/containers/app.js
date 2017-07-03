/**
 * Created by apple on 17/7/3.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';

import BookCase from './bookCase';
import BookCity from './bookCity';
import User     from './user';

import * as action from '../actions/app';
import { connect } from 'react-redux';
import Profile from '../components/test';

class App extends Component {
    static navigationOptions = {
        title: '书架',
    }
    render() {
        return (
           <View style={styles.container}>
               <Button
                   onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
                   title="Go to Lucy's profile"
                   />
           </View>
        );
    }
}

const MainScreenNavigator = TabNavigator({
    BookCase: {
        screen: BookCase,
        navigationOptions: {
                tabBarLabel: '书架',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../images/tab-book-select.png')}

                        />
                ),
        },

    },
    BookCity: {
        screen: BookCity,
        navigationOptions: {
            tabBarLabel: '书城',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../images/tab-user-select.png')}

                    />
            ),
        },
    },
    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: '用户',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../images/tab-user-select.png')}

                    />
            ),
        },
    },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#ff7e3a', // 文字和图片选中颜色
        inactiveTintColor: '#888', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#f9f9f9', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 14, // 文字大小
        },
    },
});




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffb307',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

function mapStateToProps(state) {
    console.log(state)
    return state
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default StackNavigator({
    Home: {
        screen: MainScreenNavigator,
    },
    Profile: {
        path: 'people/:name',
        screen: Profile,
    },
});

