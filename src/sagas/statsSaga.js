import { take, fork, put, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageStats } from '../api/apiIndex';
import { loadImageStats, setImagesStatsError, setImageStats } from '../actions/actionIndex';

function* handleStatsRequest(id){
    for(let i = 0; i < 3; i++){
        try{
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats(id, res.downloads.tatal));
            return true;
        } catch(e){
            
        }
    }
    yield put(setImagesStatsError(id));
}

export default function* watchStatsRequest(){
    while (true){
        const {images } = yield take(IMAGES.LOAD_SUCCESS);

        // images.forEach(image => {
        //     yield fork(handleStatsRequest, image.id);
        // });//错误，yield不能用在forEach中。

        for(let i = 0; i < images.length; i++)
        {
            yield fork(handleStatsRequest, images[i].id); 
        }
    }
}