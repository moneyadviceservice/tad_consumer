import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer'
import { middlewares } from './store'

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};