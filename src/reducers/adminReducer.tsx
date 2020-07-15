import { LOCATION_CHANGE } from 'react-router-redux'

import {
  POST_PRODUCT_START,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_FAILURE,
} from '../actions/adminActions'

import {
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE
} from '../actions/productActions'

interface Size {
  id: number,
  product_id: number,
  size: string,
  quantity: number
}
interface Sizes extends Array<Size> { }

interface Img_url {
  id: number,
  product_id: number,
  img_url: string
}

interface Img_urls extends Array<Img_url> { }

interface Product {
  product_id: number,
  name: string,
  item_type: number,
  description: string,
  color: string,
  sizes: Sizes
  price: number,
  quantity: number,
  img_urls: Img_urls
}

interface Products extends Array<Product> { }
interface State {
  loading: boolean,
  products: Products,
  error: string
}
export const initialState: State = {
  loading: false,
  products: [],
  error: ""
};

//handles REGISTER actions, puts an auth token in local storage
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_PRODUCT_START: {
      console.log("POST_PRODUCT_START")
      return { ...state, loading: true }

    }

    case POST_PRODUCT_SUCCESS: {
      console.log("POST_PRODUCT_SUCCESS")
      return { ...state, loading: false, products: [...state.products, action.payload] }
    }

    case POST_PRODUCT_FAILURE: {
      console.log("POST_PRODUCT_FAILURE")
      return { ...state, loading: false, error: action.payload }
    }

    case GET_PRODUCT_START: {
      console.log("GET_PRODUCTS_START")
      return { ...state, loading: true }
    }

    case GET_PRODUCT_SUCCESS: {
      console.log("GET_PRODUCTS_SUCCESS")
      return { ...state, loading: false, products: [...state.products, ...action.payload] }
    }

    case GET_PRODUCT_FAILURE: {
      console.log("GET_PRODUCT_FAILURE")
      return { ...state, loading: false, error: action.payload }
    }


    default:
      return state;
  }
}