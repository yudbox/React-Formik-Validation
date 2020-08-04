import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import commentsReducer from './comments-reducer';
import thunk from 'redux-thunk';


let reducers = combineReducers({
    commentsPage: commentsReducer, 
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;