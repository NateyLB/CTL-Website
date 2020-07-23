import {combineReducers} from 'redux';
import { productsReducer } from './productsReducer'
import { cartReducer } from './cartReducer'

//combines all reducers
export default combineReducers({
 productsReducer,
 cartReducer
})