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
                <Input type="text" name="name" id="form-name" placeholder="Enter the name of the product" />
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
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
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