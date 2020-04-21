import {createStore } from 'redux';
import serviceReducer from './reducers/serviceReducer';

const store = createStore(serviceReducer);

export default store;