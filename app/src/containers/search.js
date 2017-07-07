/**
 * Created by apple on 17/7/4.
 */
function mapStateToProps(state) {
    console.log(state)
    return state
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

import * as action from '../actions/app';
import { connect } from 'react-redux';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Platform
} from 'react-native';
import pxToDp   from '../util/px';

class Search extends Component {
    static navigationOptions = {
        headerStyle:{
            backgroundColor:'#ffb307',
            height:pxToDp(Platform.OS === 'ios'?210:150)
        },
        headerTitleStyle:{
            color:'white'
        },
    }
    render() {
        return (
            <View >
                <Text>我是用户</Text>
            </View>
        );
    }
}

export default Search;