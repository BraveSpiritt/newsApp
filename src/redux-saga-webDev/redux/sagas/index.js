import { takeEvery, put, call, all, fork} from 'redux-saga/effects';
import {
    GET_LATEST_NEWS,
    GET_POPULAR_NEWS,
    SET_LATEST_NEWS_ERROR,
    SET_POPULAR_NEWS_ERROR
} from '../constants';
import { setLatestNews, setPopularNews } from '../actions/actionsCreator';
import { getLatestNews, getPopularNews } from '../../api/index';

export function* handleLatestNews() {
    try {
        const { hits } = yield call(getLatestNews, 'react');
        yield put(setLatestNews(hits));
    } catch {
        yield put({ type: SET_LATEST_NEWS_ERROR, payload: 'Error fetching latest news' })
    }
}
export function* handlePopularNews() {
    try {
        const { hits } = yield call(getPopularNews);
        yield put(setPopularNews(hits));
    } catch {
        yield put({ type: SET_POPULAR_NEWS_ERROR, payload: 'Error fetching popular news' })
    }
}
export function* watchPopularNews() { 
   yield takeEvery(GET_POPULAR_NEWS, handlePopularNews) 
}
export function* watchLatestNews() { 
    yield takeEvery(GET_LATEST_NEWS, handleLatestNews) 
 }


export default function* rootSaga() {
    yield all([
        fork(watchPopularNews),
        fork(watchLatestNews)
    ]);
}