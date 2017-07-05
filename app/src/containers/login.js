/**
 * Created by apple on 17/7/4.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

class Login extends Component {
    static navigationOptions = {
        headerStyle:{
            backgroundColor:'#ffb307'
        },
        headerTitleStyle:{
            color:'white'
        },
    }
    render() {
        return (
            <View >
                <Text>我是登陆用户</Text>
            </View>
        );
    }
}

export default Login;