import imagesSaga from './imagesSaga';



export default imagesSaga;




// import { takeEvery, put, call} from 'redux-saga/effects';
// import { IMAGES } from '../constants';

// //watcher saga -> actions -> worker saga

// function* handleImagesLoad(){
// console.log("fetching images from");
// }

// //watcher saga
// function* rootSaga(){
//    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
// }

// /*以下是一些例子：
// function* workerSaga(){
//  console.log("Hey worker saga");
// }

// //watcher saga, 
// // function* rootSaga(){
// //     yield takeEvery('HELLO', workerSaga)  //第一个参数是action类型，第二个是回调函数
// // }

// function* byebyeSaga(){
//     console.log('bye bye');
// }

// function* rootSaga(){
//     yield take('LOGIN')  //这种情况是尽管LOGIN的action在store中被分发了3次，但workerSaga只会执行一次。
//     yield call(workerSaga); // 尽管在storeIndex中LOGOUT action被先分发，但在这里是先执行完了LOGIN才会执行LOGOUT,所以这里可以控制action的流程。
//     // yield take('ADD_TO_CART');
//     // yield take('BYE');
//     yield take('LOGOUT');
//     yield call(byebyeSaga);
// }
// */

// export default rootSaga;