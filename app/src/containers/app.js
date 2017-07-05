/**
 * Created by apple on 17/7/3.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import pxToDp   from '../util/px';
import BookCase from './bookCase';
import BookCity from './bookCity';
import User     from './user';
import Login    from './login';


const MainScreenNavigator = TabNavigator({
    BookCase: {
        screen: BookCase,
        navigationOptions: {
            title:"书架",
            tabBarLabel: '书架',
            tabBarIcon: ({focused,tintColor}) => (
                <Image
                    source={focused?require("../images/tab/tab-book-select.png"):require('../images/tab/tab-book.png')}
                    style={styles.icon}
                    />
            ),
        },

    },
    BookCity: {
        screen: BookCity,
        navigationOptions: {
            title:"书城",
            tabBarLabel: '书城',
            tabBarIcon: ({focused,tintColor}) => (
                <Image
                    source={focused?require('../images/tab/tab-list-select.png'):require('../images/tab/tab-city.png')}
                    style={styles.icon}
                    />
            ),
        },
    },
    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: '用户',
            tabBarIcon: ({focused,tintColor}) => (
                <Image
                    source={focused?require('../images/tab/tab-user-select.png'):require('../images/tab/tab-user.png')}
                    style={styles.icon}
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
            height:pxToDp(150)
        },
        labelStyle: {
            marginTop:pxToDp(4),
            fontSize: pxToDp(30), // 文字大小
        },
    },
});




const styles = StyleSheet.create({
    icon:{
        height:pxToDp(70),
        width:pxToDp(70),
        resizeMode:"contain"
    }
});



export default StackNavigator({
    Home: {
        screen: MainScreenNavigator,
    },
    Login:{
        screen:Login
    }
});

