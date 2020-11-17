import { call, put, takeLatest,takeEvery} from 'redux-saga/effects'
import {Fetch,FF} from '../redux/action'
import fetchData from './api'



function* getApiData(d){
    const data=yield call(fetchData,d);
    console.log("saga",data)
    yield put(Fetch(data))
}
export function* watcher(){
    yield takeLatest(FF,getApiData)
}
export default watcher