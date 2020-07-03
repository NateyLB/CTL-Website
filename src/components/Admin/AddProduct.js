import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'; 
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { postProduct } from '../../actions/adminActions.js'


const initialProductState = {
    name: '',
    type: 1,
    description: '',
    color: '',
    sizes: [],
    price: 0,
    quantity: 0,
    file: ''
}



const AddProduct = props => {
    const [product, setProduct] = useState(initialProductState)
    const [size, setSize] = useState({ size: '', quantity: 0 })
    const formData = new FormData()

    useEffect(()=>{
        let total = 0;
        product.sizes.forEach(size=>{
            total += size.quantity
        });
        console.log(total, "total quantity")
        setProduct({...product, quantity: total})
    },[product.sizes])

    const changeHandler = event => {
        setProduct({
            ...product,
            [event.target.name]: event.target.name === 'type' || event.target.name === 'price'? parseInt(event.target.value): event.target.value
        })
    }

    const sizeHandler = event => {
        setSize({ ...size, [event.target.name]: event.target.name === 'quantity' ? parseInt(event.target.value) : event.target.value });
    }
    const fileHandler = event =>{
        setProduct({
            ...product,
            [event.target.name]: event.target.files[0]
        })
        formData.append('file',event.target.files[0])
    }
    const addSize = event => {
        event.preventDefault();
        setProduct({ ...product, sizes: [...product.sizes, size] });
        setSize({ size: '', quantity: 0 });
        document.getElementById('form-size').value = '';
        document.getElementById('form-size-quantity').value = 0;
    }
    
    const submitProduct = event => {
        event.preventDefault();
        console.log({product}, "before post")
        props.postProduct(formData)
        setProduct(initialProductState)
    }
    console.log(product)

    return (
        <Form id="add-product" >
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="form-name" placeholder="Olde-English Dior"  />
            </FormGroup>
            <FormGroup>
                <Label for="type">Select</Label>
                <Input type="select" name="type" id="form-type" value={product.type} onChange={changeHandler}>
                    <option value="1">Hat</option>
                    <option value="2">Pants</option>
                    <option value="3">Shirt</option>
                    <option value="4">Shoes</option>
                    <option value="5">Jacket</option>
                    <option value="6">Sweatshirt</option>
                    <option value="7">Bag</option>
                    <option value="8">Accessory</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="form-description" placeholder="A bootleg Dior hat" value={product.description}  onChange={changeHandler} />
            </FormGroup>
               <FormGroup id="price-group">
                <Label for="price">Price</Label>
                <Input type="number" name="price" id="form-price" placeholder="140" step="20" min="0" value={product.price} onChange={changeHandler} />
            </FormGroup>
            <FormGroup>
                <Label for="color">Color</Label>
                <Input type="text" name="color" id="form-color" placeholder="Blue" value={product.color} onChange={changeHandler} />
            </FormGroup>
            <FormGroup id="size-group">
                <Label for="size">Size</Label>
                <Input type="text" name="size" id="form-size" placeholder="7 5/8" value={size.size} onChange={sizeHandler} />
                <Label for="quantity">Quantity</Label>
                <Input type="number" name="quantity" id="form-size-quantity" placeholder="10" step="5" min='0' value={parseInt(size.quantity)} onChange={sizeHandler} />
                <Button onClick={addSize}>+</Button>
            </FormGroup>
         
            <FormGroup id="file-group">
                <Label for="imgFile">File</Label>
                <Input type="file" name="file" id="form-file" onChange={fileHandler} />
            </FormGroup>
            <br />
            <Button onClick={submitProduct}>Submit</Button>

        </Form>
    )
}

const mapStateToProps = state => {
    return {
    };
  };
  
  export default connect(
  mapStateToProps,
  {postProduct}
  )(AddProduct)
