import {createStore, applyMiddleware} from 'redux';
import {Reducers} from '../Reducer/Reducers';
import logger from 'redux-logger';

export const myStore = createStore(Reducers, applyMiddleware(logger));
