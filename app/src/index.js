/**
 * Created by apple on 17/7/3.
 *
 * APP首页
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();
import App from './containers/app';
const Realm = require('realm');

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                        <App />
            </Provider>
        )
    }
}

export default Root;