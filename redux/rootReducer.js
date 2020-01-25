import {  combineReducers } from 'redux';
import footerReducer from '../components/footer/reducer'
import firmsReducer from '../components/firms/reducer'

const rootReducer = combineReducers({
    footer: footerReducer,
    firms: firmsReducer
});

export default rootReducer;