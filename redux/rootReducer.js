import {  combineReducers } from 'redux';
import footerReducer from '../components/footer/reducer'

const rootReducer = combineReducers({
    footer: footerReducer
});

export default rootReducer;