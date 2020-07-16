import React, { useState} from 'react'

/**
 * @desc a carousel that displays images of the product
 * @param props img_urls from the productCard
 */
const Carousel = props => {
    const [index, setIndex] = useState(0)
    const next = () =>{
        if (index !== props.img_urls.length - 1){
            setIndex(currIndex => currIndex + 1)
        }
    }

    const prev = () =>{
        if(index > 0){
            setIndex(currIndex => currIndex - 1)
        }
    }
    return(
        <div className='carousel'>
            <img src={props.img_urls[index].img_url} alt={props.img_urls[index]}/>
            <div className="carousel-arrows">
            <h2 onClick={prev} style={index > 0 ? {visibility:"visible"} : {visibility: "hidden"}}> {'<'} </h2>
            <h2 onClick={next} style={index < props.img_urls.length - 1 ? {visibility:"visible"} : {visibility: "hidden"}}> {'>'} </h2>
            </div>
        </div>
    )
}

export default Carousel