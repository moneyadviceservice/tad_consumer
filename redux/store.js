import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import thunkMiddleware from 'redux-thunk'

// export const middlewares =     composeWithDevTools(applyMiddleware(thunkMiddleware))

export const middlewares = [thunkMiddleware];


export const initializeStore = (initialState={}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
