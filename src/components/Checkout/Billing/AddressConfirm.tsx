import React from 'react'
import { connect } from "react-redux";


const AddressConfirm = props => {
    console.log(props.address)
    return(
        <div>
            <p>{`${props.address.firstName} ${props.address.lastName}`}</p>
            {props.address.company? <p>{props.address.company}</p>: null}
            <p>{props.address.email}</p>
            <p>{``}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      address: state.checkoutReducer.address
    };
  };
  
export default connect(mapStateToProps)(AddressConfirm);
