import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PaypalExpressBtn from 'react-paypal-express-checkout';

const PaypalButton = props => {
    let env = 'sandbox'; // you can set this string to 'production'
	let currency = 'USD'; // you can set this string from your props or state  
    let total = props.cart.cart.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.size.quantity), 0)  ;  // this is the total amount (based on currency) to charge
    
    // useEffect(() =>{
    //     total = props.cart.cart.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.size.quantity), 0)  * 100
    // },[])

    const client = {
        sandbox: 'AS_FLV1VZCu9qQe934DAF6FAoW6QXaVPvGoybAS9ujo1oF35OTfO-eTd4JaoYOcTHGW49tn5pzbxwa1y'
    }
    const onSuccess = (payment) => {
        // 1, 2, and ... Poof! You made it, everything's fine and dandy!
                console.log("Payment successful!", payment);
                // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onCancel = (data) => {
        // The user pressed "cancel" or closed the PayPal popup
        console.log('Payment cancelled!', data);
        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onError = (err) => {
        // The main Paypal script could not be loaded or something blocked the script from loading
        console.log("Error!", err);
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    }   

    return (
        <div className='paypal-container'>
        <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        </div>

    );
}

const mapStateToProps = state => {
    return {
        cart: state.cartReducer
    };
};

export default connect(
    mapStateToProps
)(PaypalButton)
