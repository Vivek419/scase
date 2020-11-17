import { createStore ,applyMiddleware} from 'redux'
import Reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import {watcher} from '../saga/saga'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(Reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcher)
export default store;