import { axiosBase } from "../utils/axiosBase";

export const VERIFY_ADDRESS_START = "VERIFY_ADDRESS_START";
export const VERIFY_ADDRESS_SUCCESS = "VERIFY_ADDRESS_SUCCESS";
export const VERIFY_ADDRESS_FAILURE = "VERIFY_ADDRESS_FAILURE";

export const verifyAddress = (address, match) => (dispatch) => {
  dispatch({ type: VERIFY_ADDRESS_START });
  axiosBase()
    .post("/shipping/verify", address)
    .then((res) => {
      console.log(res);
      localStorage.setItem("address", JSON.stringify({
          name: { firstName: address.firstName, lastName: address.lastName },
          email: address.email,
          address: res.data,
        }));
      match.push("/checkout/billing");
      dispatch({
        type: VERIFY_ADDRESS_SUCCESS,
        payload: {
          name: { firstName: address.firstName, lastName: address.lastName },
          email: address.email,
          address: res.data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      alert("Please enter a valid address");
      dispatch({ type: VERIFY_ADDRESS_FAILURE, payload: err });
    });
};
