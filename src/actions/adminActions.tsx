import { axiosWithAdminAuth } from '../utils/axiosWithAdminAuth';

export const POST_LOGIN_START = 'POST_LOGIN_START';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';

export const POST_PRODUCT_START = 'POST_PRODUCT_START';
export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS';
export const POST_PRODUCT_FAILURE = 'POST_PRODUCT_FAILURE';

export const UPDATE_PRODUCT_START = 'UPDATE_PRODUCT_START';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

export const DELETE_IMG_START = 'DELETE_IMG_START';
export const DELETE_IMG_SUCCESS = 'DELETE_IMG_SUCCESS';
export const DELETE_IMG_FAILURE = 'DELETE_IMG_FAILURE';




/**
 * @desc takes a credentials and posts them to login endpoint, then takes JWT and stores
 * it in localStorage and goes to /admin/tools
 * @param credentials username and password
 * @param match useHistory match object to go to /admin/tools
 */
//makes a call to backend api and returns a toekn on success
export const login = (credentials, match) => dispatch => {

    dispatch({ type: POST_LOGIN_START });
    axiosWithAdminAuth()
        .post('/login', credentials)
        .then(res => {
            dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data });
            localStorage.setItem('adminToken', JSON.stringify(res.data.token));
            match.push('/admin/tools')
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: POST_LOGIN_FAILURE, payload: err })
        })
}

/**
 * @desc posts a product to DB and then sends the response as a payload to productReducer
 * @param product product object from from form
 */
export const postProduct = (product) => dispatch => {
    dispatch({ type: POST_PRODUCT_START });
    axiosWithAdminAuth()
        .post('/products', product)
        .then(res => {
            console.log(res)
            dispatch({ type: POST_PRODUCT_SUCCESS, payload: res.data });
            alert("Successfully posted product.")

        })
        .catch(err => {
            console.log(err)
            dispatch({ type: POST_PRODUCT_FAILURE, payload: err })

        })
}

/**
 * @desc updates product information in DB and send updated product as payload to productsReducer
 */

export const updateProduct = (product, index, toggleEdit) => dispatch => {
    dispatch({type: UPDATE_PRODUCT_START});
       axiosWithAdminAuth()
       .put(`/products/${product.product_id}`, product)
       .then(res => {
           console.log(res)
           dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: {product: res.data, index: index} })
           toggleEdit()
           alert("Successfully updated product.")
       })
       .catch(err => {
           console.log(err)
           dispatch({type: UPDATE_PRODUCT_FAILURE, payload: err})
        })
}

export const deleteImg = (img_url, product_id, index) => dispatch => {
    dispatch({type:DELETE_IMG_START});
    axiosWithAdminAuth()
    .post(`/products/${product_id}/images`, {img_url: img_url})
    .then(res => {
        console.log(res)
        dispatch({type: DELETE_IMG_SUCCESS, payload:{ imgs: res.data, index: index} })
    })
    .catch(err => {
        console.log(err)
        dispatch({type: DELETE_IMG_FAILURE, payload: err})
    })

}


