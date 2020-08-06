import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import CountrySelect from './CountrySelect';

import { verifyAddress } from '../../actions/checkoutActions'

const initialFormState = {
    firstName: '' ,
    lastName: '',
    email: '',
    company: '',
    areaCode: '',
    phoneNumber: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    country: 'Country'

}

const ShippingAddressForm = props =>{
    const [formData, setFormData] = useState(initialFormState)
    const match = useHistory();
    let filled = false
    if( 
        formData.firstName !== '' && formData.lastName !== '' && formData.email !=='' && formData.areaCode !== '' && formData.phoneNumber !== ''
        && formData.street1 !== '' && formData.city !== '' && formData.state !== '' && formData.zip !== '' && formData.country != ''
    ){
        filled = true
    }

    const changeHandler = event =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const submitAddress = event => {
        event.preventDefault();
        props.verifyAddress({
            firstName: formData.firstName ,
            lastName: formData.lastName,
            email: formData.email,
            company: formData.company,
            phoneNumber: `${formData.areaCode}${formData.phoneNumber}`,
            street1: formData.street1,
            street2: formData.street2,
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
            country: formData.country
        }, match)
    }

    return (
        <form className='shipping-address-form'>
            <label className='name-container' htmlFor='firstName'>
                Name
                <input className='first-name' type='text' name='firstName' value={formData.firstName} placeholder='First Name' onChange={changeHandler}/>
                <input className='last-name' type='text' name='lastName' value={formData.lastName} placeholder='Last Name' onChange={changeHandler}/>
            </label>
            <label className='company-container' htmlFor='company'>
                Company
                <input type='text' name='company' value={formData.company} placeholder='company' onChange={changeHandler} />
            </label>
            <label className='email-container' htmlFor='email'>
                Email
                <input className='email' type='email' name='email' value={formData.email} placeholder='johndoe@email.com' onChange={changeHandler} />
            </label>
            <label className='phone-number-container' htmlFor="phoneNumber">
                &nbsp; Phone Number
                <input className='area-code' type='number' name='areaCode' value={formData.areaCode} placeholder='123' maxLength={3} onChange={changeHandler}/> &nbsp; - &nbsp;
                <input className='phone-number' type='number' name='phoneNumber' value={formData.phoneNumber} placeholder='4567890' maxLength={7} onChange={changeHandler}/>
                {/* <input type='tel' name='phoneNumber' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='123-456-7890' required onChange={changeHandler}/> */}
            </label>
            <label className='address-container' htmlFor='streetAddress'>
                &nbsp; &nbsp; Address
                <div>
                <input  className='street-address' type='text' name='street1' value={formData.street1} placeholder='Street Address' onChange={changeHandler}/>
                <br/>
                <input  className='street-address' type='text' name='street2' value={formData.street2} placeholder='Street Address Line 2' onChange={changeHandler}/>
                </div>
                {/* <div> */}
                    <input className='city' type='text' name='city' value={formData.city} placeholder='City'onChange={changeHandler}/>
                    <input className='state' type='text' name='state' value={formData.state} placeholder='State/Province' onChange={changeHandler}/>
                    <input className='zipcode' type='text' name='zip' value={formData.zip} placeholder='Postal/Zipcode' onChange={changeHandler}/>
                    <CountrySelect country={formData.country} changeHandler={changeHandler} />
                {/* </div> */}
            </label>
            <div className='shipping-button-container'>
                {filled ? <input onClick={submitAddress} type='submit' /> : null }
            </div>
        </form>
    )
}


const mapStateToProps = state => {
    return {
    };
};

export default connect(
    mapStateToProps,
    { verifyAddress }
)(ShippingAddressForm)

