import { delay, takeEvery, put, fork, all, spawn, call } from 'redux-saga/effects'




export function* saga1() {
    yield delay(1000);
    yield put({ type: "CALL_SAGA_1" });
}

export function* saga2() {
    yield delay(1000);
    yield put({ type: "CALL_SAGA_2" });
}
export function* saga3() {
    yield delay(1000);
    yield put({ type: "CALL_SAGA_3" });
}


export function* rootSaga1() {
    yield takeEvery('SAGA_1', saga1)
}


export function* rootSaga2() {
    yield [
        saga1(),
        saga2(),
        saga3(),
    ]
}


export function* rootSaga3() {
    yield fork(saga1)
    yield fork(saga2)
    yield fork(saga3)
}


export function* rootSaga4() {
    yield [
        fork(saga1),
        fork(saga2),
        fork(saga3)
    ]
}



export function* rootSaga5() {
    yield all([
        takeEvery('SAGA_1', saga1),
        takeEvery('SAGA_2', saga2),
        takeEvery('SAGA_3', saga3),
    ])
}

export function* rootSaga6() {
    yield all([
        fork(saga1),
        fork(saga2),
        fork(saga3),
    ])
}


export function* rootSaga7() {
    yield spawn(saga1)
    yield spawn(saga2)
    yield spawn(saga3)
}



export function* rootSaga8() {
    const sagas = [saga1, saga2, saga3]

    yield all(sagas.map(saga => spawn(function* () {
        while (true) {
            try {
                yield call(saga);
                break;
            } catch (e) {
                console.log(e);
            }
        }
    })));
}