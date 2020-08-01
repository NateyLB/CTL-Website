import React, { useState } from 'react';
import CountrySelect from './CountrySelect';

const initialFormState = {
    firstName:'',
    lastName:'',
    email:'',
    areaCode:'',
    phoneNumber:'',
    streetAddress:'',
    streetAddress2:'',
    city:'',
    state:'',
    zipcode:'',
    country:''

}

const ShippingAddressForm = props =>{
    const [formData, setFormData] = useState(initialFormState)

    const changeHandler = event =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    console.log(formData)

    return (
        <form className='shipping-address-form'>
            <label className='name-container' htmlFor='firstName'>
                Name
                <input className='first-name' type='text' name='firstName' value={formData.firstName} placeholder='First Name' onChange={changeHandler}/>
                <input className='last-name' type='text' name='lastName' value={formData.lastName} placeholder='Last Name' onChange={changeHandler}/>
            </label>
            <label className='email-container' htmlFor='email'>
                Email
                <input className='email' type='email' name='email' value={formData.email} placeholder='johndoe@email.com' onChange={changeHandler} />
            </label>
            <label className='phone-number-container' htmlFor="phoneNumber">
                &nbsp; Phone Number
                <input className='area-code' type='number' name='areaCode' value={formData.areaCode} placeholder='123' onChange={changeHandler}/> &nbsp; - &nbsp;
                <input className='phone-number' type='number' name='phoneNumber' value={formData.phoneNumber} placeholder='4567890' onChange={changeHandler}/>
                {/* <input type='tel' name='phoneNumber' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='123-456-7890' required onChange={changeHandler}/> */}
            </label>
            <label className='address-container' htmlFor='streetAddress'>
                &nbsp; &nbsp; Address
                <div>
                <input  className='street-address' type='text' name='streetAddress' value={formData.streetAddress} placeholder='Street Address' onChange={changeHandler}/>
                <br/>
                <input  className='street-address' type='text' name='streetAddress2' value={formData.streetAddress2} placeholder='Street Address Line 2' onChange={changeHandler}/>
                </div>
                {/* <div> */}
                    <input className='city' type='text' name='city' value={formData.city} placeholder='City'onChange={changeHandler}/>
                    <input className='state' type='text' name='state' value={formData.state} placeholder='State/Province' onChange={changeHandler}/>
                    <input className='zipcode' type='text' name='zipcode' value={formData.zipcode} placeholder='Postal/Zipcode' onChange={changeHandler}/>
                    <CountrySelect country={formData.country} changeHandler={changeHandler} />
                {/* </div> */}
            </label>
            <div className='button-container'>
                <input type='reset' />
                <input type='submit' />
            </div>
        </form>
    )
}

export default ShippingAddressForm;