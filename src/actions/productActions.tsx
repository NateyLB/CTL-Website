import { axiosBase } from "../utils/axiosBase";

export const GET_PRODUCT_START = "GET_PRODUCT_START";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

/**
 * @desc gets all products in DB and sends as a payload to productsReducer
 */
export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCT_START });
  // axiosWithAdminAuth()
  axiosBase()
    .get("/products")
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_PRODUCT_FAILURE, payload: err });
    });
};
