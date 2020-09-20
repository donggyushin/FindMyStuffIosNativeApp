import { applyMiddleware, createStore } from 'redux'

import RootReducer from '../reducer'
import thunk from 'redux-thunk'

const store = createStore(RootReducer, applyMiddleware(thunk))

export type RootReducerType = ReturnType<typeof RootReducer>

export default store