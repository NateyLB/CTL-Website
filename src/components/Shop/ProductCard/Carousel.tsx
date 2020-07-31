import React, { useState } from 'react'
import { connect } from 'react-redux'; 
import  { deleteImg } from '../../../actions/adminActions'



/**
 * @desc a carousel that displays images of the product
 * @param props img_urls from the productCard
 */
const Carousel = props => {
    const [index, setIndex] = useState(0)
    const next = event => {
        event.preventDefault();
        if (index !== props.img_urls.length - 1) {
            setIndex(currIndex => currIndex + 1)
        };
    }

    const prev = event => {
        event.preventDefault();
        if (index > 0) {
            setIndex(currIndex => currIndex - 1)
        };
    }


    const getOrderedImgs = () => {
        function sortFunction(a, b) {
            if (a[0].slice(-1) === b[0].slice(-1)) {
                return 0;
            }
            else {
                return (a[0].slice(-1) < b[0].slice(-1)) ? -1 : 1;
            }
        }
        const order: string[] = []

        props.img_urls.forEach(img => {
            const split_url = img.img_url.split(/\...g/i)
            split_url[1] = img.img_url
            order.push(split_url)
        })
        order.sort(sortFunction)
        const ordered = order.map(img_url => img_url[1])
        return ordered
    }
    const images = getOrderedImgs()

    return (
        <div className='carousel' style={props.height ? {height:`${props.height}`} : {} }>
            <img src={images[index]} alt={props.img_urls[index]} style={props.height ? {height:`${props.height}`} : {} }/>
            <div className="carousel-arrows">
                <button onClick={event => prev(event)} style={index > 0 ? { visibility: "visible" } : { visibility: "hidden" }}> {'<'} </button>
                <button onClick={event => next(event)} style={index < props.img_urls.length - 1 ? { visibility: "visible" } : { visibility: "hidden" }}> {'>'} </button>
            </div>
            {props.edit === false ? null : <div className="delete-image" onClick={() => props.deleteImg(images[index], props.img_urls[0].product_id, props.index)}>DELETE</div> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
    };
  };
  
  export default connect(
  mapStateToProps,
  {deleteImg}
  )(Carousel)