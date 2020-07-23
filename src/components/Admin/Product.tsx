import React, { useState, useRef } from 'react';
import { connect } from 'react-redux'; 
import Carousel from '../Shop/ProductCard/Carousel'
import  { updateProduct } from '../../actions/adminActions'

interface Size{
    size: string,
    color: string,
    quantity: number
}
interface Sizes extends Array<Size>{}

interface Product{
    name: string,
    type: number,
    description: string,
    sizes: Sizes,
    price: number,
    quantity: number
}
const initialSize:Size ={
    size:'',
    color:'',
    quantity: 0
}

/**
 * @desc a product card that allows editing of the product in DB
 * @param props product from the Product container
 */
const Product = props => {

    const edits = props.product.sizes.map((size,index) => {
        
        return false;
    })
    const [edit, setEdit] = useState(false);
    const [product, setProduct] = useState(props.product);
    const [sizes, setSizes] = useState(edits);
    const [editSizes, setEditSizes] = useState(edits);
    const [sizeToEdit, setSizeToEdit] = useState(initialSize);
    const editRef = useRef(edit)
    editRef.current = edit;

    const toggleEditSize =(index) => {
        const editSizesCopy = JSON.parse(JSON.stringify(edits));
        const sizesCopy = JSON.parse(JSON.stringify(sizes));
        editSizesCopy[index] = !editSizes[index];
        sizesCopy[index] = props.product.sizes[index];
        setEditSizes(editSizesCopy);
        setSizes(sizesCopy);
        setSizeToEdit(props.product.sizes[index]);
        
    }

    const toggleEdit = () => {
        setEdit(edit => !edit);
    }
    const changeHandler = event => {
        setProduct({
            ...product,
            [event.target.name]: event.target.name === 'price'? parseInt(event.target.value): event.target.value
        });
    }

    const sizeHandler = event => {
        setSizeToEdit({ ...sizeToEdit, [event.target.name]: event.target.name === 'quantity' ? parseInt(event.target.value) : event.target.value });
    }

    const saveSize = (event,index) => { 
        event.preventDefault()
        const sizesCopy = product.sizes;
        sizesCopy[index] = sizeToEdit
        setProduct({...product, sizes: sizesCopy})
        toggleEditSize(index)
        let total = 0;
        product.sizes.forEach(size=>{
            total += size.quantity;
        });
        setProduct({...product, quantity: total})
    }

    const updateProduct = (event, index) => {
        event.preventDefault()
        props.updateProduct(product, index, toggleEdit)
    }
    return (
        edit == false ? <div className="admin-product-card">
            <div className="admin-product-info">
                <h3 className="admin-product-name">{props.product.name}</h3>
                <div className="admin-product-description">{props.product.description}</div>
                <div><h2>Price:</h2> {props.product.price}</div>
                <div className="admin-product-stock">
                    <h2>Stock</h2>
                    <div className="admin-product-stock-container">
                        {props.product.sizes.map(size => {
                            return <div className="admin-product-stock-data-container" key={size.size + size.color + size.quantity}><p>{size.size}</p> <p>{size.color}</p> <p>Qty:{size.quantity}</p></div>
                        })}
                    </div>
                </div>
                <div><h2>Total in stock:</h2> {props.product.quantity}</div>
            </div>
            <Carousel key={`Carousel${props.product.product_id}`} img_urls={props.product.img_urls} edit={edit} index={props.index}/>
            <i className="far fa-edit admin-product-edit-icon" onClick={toggleEdit}></i>
        </div> :
            <form className="admin-product-card">
                <div className="admin-product-info">
                    <input type="text" name="name" id="name" value={product.name} onChange={changeHandler} />
                    <br/>
                    <textarea name="description" value={product.description} onChange={changeHandler} />
                    <div>
                    <label htmlFor="price"><h2>Price:</h2></label>
                    <input type="number" name="price" id="price" value={product.price} step="20" min="0" className="price-input" onChange={changeHandler}/>
                    </div>
                    <div className="admin-product-stock">
                        <h2>Stock</h2>
                        <div className="admin-product-stock-container">
                            {product.sizes.map( (size, index) => {
                                return ( editSizes[index] ? 
                                    
                                <div className="admin-product-stock-form-container" key={size.size + size.color + size.quantity + 'edit'}>
                                        <input type="text" name="size" value={sizeToEdit.size} onChange={sizeHandler} onClick={event => event.stopPropagation()}/>
                                        <input type="text" name="color" value={sizeToEdit.color} onChange={sizeHandler} onClick={event => event.stopPropagation()}/>
                                        <input type="number" name="quantity" step="5" min='0' value={sizeToEdit.quantity} onChange={sizeHandler} onClick={event => event.stopPropagation()}/>
                                        <i className="fas fa-times admin-size-edit-icon"  onClick={()=>toggleEditSize(index)}></i>
                                        <button className="save-size" onClick={event=>saveSize(event, index)}> Save </button>
                                </div>
                                    
                                : <div className="admin-product-stock-data-container" key={size.size + size.color + size.quantity} onClick={()=>toggleEditSize(index)}>
                                    <p>{size.size}</p> <p>{size.color}</p> <p>Qty:{size.quantity}</p>
                                    </div>)
                            })}
                        </div>
                    </div>
                    <div><h2>Total in stock:</h2> {product.quantity}</div>
                    <button className="submit" onClick={event=> updateProduct(event, props.index)}> Submit </button>
                </div>
                <Carousel key={`Carousel${props.product.product_id}`} img_urls={props.product.img_urls} delete={edit} index={props.index} />
                <i className="fas fa-times admin-product-edit-icon"  onClick={toggleEdit}></i>
            </form>
    )
}

const mapStateToProps = state => {
    return {
    };
  };
  
  export default connect(
  mapStateToProps,
  {updateProduct}
  )(Product)
