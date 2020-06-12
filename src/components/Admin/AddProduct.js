import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const AddProduct = props => {
    const [product, setProduct] = useState({
        name: '',
        type: '',
        color:'',
        size: '',
        price: 0,
        quantity: 0,
        imgFile:''
    })

    const changeHandler = event => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Form id="add-product">
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="form-name" placeholder="Olde-English Dior" />
            </FormGroup>
            <FormGroup>
                <Label for="type">Select</Label>
                <Input type="select" name="type" id="form-type">
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
                <Input type="textarea" name="description" id="form-description" />
            </FormGroup>
            <FormGroup>
                <Label for="color">Color</Label>
                <Input type="text" name="color" id="form-color" placeholder="Blue" />
            </FormGroup>
            <FormGroup>
                <Label for="size">Size</Label>
                <Input type="text" name="size" id="form-size" placeholder="7 5/8" />
            </FormGroup>
            <FormGroup>
                <Label for="price">Price</Label>
                <Input type="number" name="price" id="form-price" placeholder="123.45" step=".01" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
          </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
                </FormGroup>
                <FormGroup check disabled>
                    <Label check>
                        <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
                </FormGroup>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
            Check me out
          </Label>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    )
}

export default AddProduct;