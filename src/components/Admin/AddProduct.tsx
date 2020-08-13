import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { postProduct } from "../../actions/adminActions";

interface Size {
  size: string;
  color: string;
  quantity: number;
}
interface Sizes extends Array<Size> {}

interface Product {
  name: string;
  type: number;
  description: string;
  sizes: Sizes;
  price: number;
  quantity: number;
}

const initialProductState: Product = {
  name: "",
  type: 1,
  description: "",
  sizes: [],
  price: 0,
  quantity: 0,
};

const initialSize: Size = {
  size: "",
  color: "",
  quantity: 0,
};

/**
 * @desc a form that collects product data and posts it to an enpoint in API
 * @param props actions from the action store used to post the product to an endpoint in API
 */
const AddProduct = (props) => {
  const [product, setProduct] = useState(initialProductState);
  const [size, setSize] = useState(initialSize);
  let formData = new FormData();

  //get total quantity on state change of product.sizes
  useEffect(() => {
    let total = 0;
    product.sizes.forEach((size) => {
      total += size.quantity;
    });
    setProduct({ ...product, quantity: total });
  }, [product.sizes]);

  /**
   * @desc change handler for form, sets state on on change of form inputs
   * @param event event object
   */
  const changeHandler = (event) => {
    setProduct({
      ...product,
      [event.target.name]:
        event.target.name === "type" || event.target.name === "price"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  };
  /**
   * @desc shapes a size object to set to product state
   * @param event event onbject
   */
  const sizeHandler = (event) => {
    setSize({
      ...size,
      [event.target.name]:
        event.target.name === "quantity"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  };

  /**
   * @desc sets size object to product state
   * @param event event object
   */
  const addSize = (event) => {
    event.preventDefault();
    setProduct({ ...product, sizes: [...product.sizes, size] });
    setSize({ size: "", color: "", quantity: 0 });
    let formSize = document.getElementById("form-size") as HTMLFormElement;
    formSize.value = "";
    let formSizeColor = document.getElementById(
      "form-size-color"
    ) as HTMLFormElement;
    formSizeColor.value = "";
    let formSizeQuantity = document.getElementById(
      "form-size-quantity"
    ) as HTMLFormElement;
    formSizeQuantity.value = 0;
  };
  /**
   * @desc handles setting the file to formData
   * @param event event object
   */
  const fileHandler = (event) => {
    if (event.target.files.length > 1) {
      Array.from(event.target.files).forEach((file, index) => {
        formData.append("file", event.target.files[index]);
      });
    } else {
      formData.append("file", event.target.files[0]);
    }
  };

  /**
   * @desc posts the product to endpoint in API and clears product and form state
   * @param event event object
   */
  const submitProduct = (event) => {
    event.preventDefault();
    for (const key in product) {
      if (key === "sizes") {
        product.sizes.forEach((size) => {
          formData.append(key, JSON.stringify(size));
        });
      } else {
        formData.append(key, product[key]);
      }
    }
    props.postProduct(formData);
    let formFile = document.getElementById("form-file") as HTMLFormElement;
    formFile.value = null;
    setProduct(initialProductState);
    formData = new FormData();
  };

  return (
    <Form id="add-product">
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="form-name"
          placeholder="Olde-English Dior"
          value={product.name}
          onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="type">Select</Label>
        <Input
          type="select"
          name="type"
          id="form-type"
          value={product.type}
          onChange={changeHandler}
        >
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
        <Input
          type="textarea"
          name="description"
          id="form-description"
          placeholder="A bootleg Dior hat"
          value={product.description}
          onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup id="price-group">
        <Label for="price">Price</Label>
        <Input
          type="number"
          name="price"
          id="form-price"
          placeholder="140"
          step="20"
          min="0"
          value={product.price}
          onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup id="size-group">
        <Label for="size">Size</Label>
        <Input
          type="text"
          name="size"
          id="form-size"
          placeholder="7 5/8"
          value={size.size}
          onChange={sizeHandler}
        />
        <Label for="color">Color </Label>
        <Input
          type="text"
          name="color"
          id="form-size-color"
          placeholder="Blue"
          onChange={sizeHandler}
        />
        <Label for="quantity">Quantity</Label>
        <Input
          type="number"
          name="quantity"
          id="form-size-quantity"
          placeholder="10"
          step="5"
          min="0"
          value={size.quantity}
          onChange={sizeHandler}
        />
        <Button onClick={addSize}>+</Button>
        {product.sizes.length > 0
          ? product.sizes.map((size) => (
              <p key={size.size + size.color + size.quantity}>
                Size: {size.size} Color: {size.color} Quantity: {size.quantity}
              </p>
            ))
          : null}
      </FormGroup>

      <FormGroup id="file-group">
        <Label for="imgFile">File</Label>
        <Input
          type="file"
          name="file"
          multiple="multiple"
          id="form-file"
          onChange={fileHandler}
        />
      </FormGroup>
      <br />
      <Button onClick={submitProduct}>Submit</Button>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { postProduct })(AddProduct);
