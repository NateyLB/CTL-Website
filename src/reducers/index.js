import {combineReducers} from 'redux';
import { productsReducer } from './productsReducer'
import { cartReducer } from './cartReducer'
import { checkoutReducer } from './checkoutReducer'

//combines all reducers
export default combineReducers({
 productsReducer,
 cartReducer,
 checkoutReducer
})