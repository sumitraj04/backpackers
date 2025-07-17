import { getCatAction,successCatAction,getBlogListAction,successBlogListAction } from "../reduxState/slices/BuddhaJourneySlices";
import {call,all,put, takeLatest } from 'redux-saga/effects'
 import * as Api from "../services/Api"
import { blogCardData } from "../Data";
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    let payloadData = action.payload;
    const response = yield call(Api.fetchCatApiResults, payloadData);
    console.log(response ,"response")
    yield put(successCatAction(response));

    console.log("buddha journey saga cat action  called",action)
    // const user = yield call(Api.fetchUser, action.payload.userId)
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log("catch")
  }
}
function* fetchBlogList() {
  try {
    // let payloadData = action.payload;
    // const response = yield call(Api.fetchCatApiResults, payloadData);
    // console.log(response ,"response")
    yield put(successBlogListAction(blogCardData));

    console.log("buddha journey saga bloglist action  called")
    // const user = yield call(Api.fetchUser, action.payload.userId)
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log("catch")
  }
}
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* BuddhaJourneySaga() {
  yield all([
    takeLatest(getCatAction.type, fetchUser),
    takeLatest(getBlogListAction.type, fetchBlogList),
  ])
}

export default BuddhaJourneySaga