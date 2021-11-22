 import { createStore, applyMiddleware } from "redux";

 import rootReducer from "../reducers/reducerIndex";
 import createSagaMiddleware from 'redux-saga';
 import rootSaga from '../sagas/sagaIndex';

 const configureStore = () => {
     const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
       rootReducer,
       applyMiddleware(sagaMiddleware),
    //    compose(
    //     applyMiddleware(sagaMiddleware),
    //     window.__REDUX_DEVTOOLS_EXTENSION__&&
    //     window.__REDUX_DEVTOOLS_EXTENSION__(),
    //    )
    
    );

    sagaMiddleware.run(rootSaga);

   //  store.dispatch({ type: 'HELLO' });

   //  store.dispatch({type: 'LOGOUT'})
   //  store.dispatch({type: 'LOGIN'})
   //  store.dispatch({type: 'LOGOUT'})

    return store;
 }

 export default configureStore;