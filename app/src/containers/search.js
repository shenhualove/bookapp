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