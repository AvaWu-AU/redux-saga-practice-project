import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from "../constants";
import { fetchImages } from "../api/apiIndex";
import { setImages, setError } from "../actions/actionIndex";

export const getPage = state => state.nextPage;

export function* handleImagesLoad(){
    try{
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images))
    } catch(error){
     // dispatch error action here.
     yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad(){
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}