import React, { useState } from 'react'


/**
 * @desc a carousel that displays images of the product
 * @param props img_urls from the productCard
 */
const Carousel = props => {
    const [index, setIndex] = useState(0)
    const next = () => {
        if (index !== props.img_urls.length - 1) {
            setIndex(currIndex => currIndex + 1)
        }
    }

    const prev = () => {
        if (index > 0) {
            setIndex(currIndex => currIndex - 1)
        }
    }


    interface Imgs extends Array<string> { }
    const imgs: Imgs = []
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
        console.log(props.img_urls)
        console.log(order, "ordered")
        return ordered
    }

    return (
        <div className='carousel'>
            <img src={getOrderedImgs()[index]} alt={props.img_urls[index]} />
            <div className="carousel-arrows">
                <button onClick={prev} style={index > 0 ? { visibility: "visible" } : { visibility: "hidden" }}> {'<'} </button>
                <button onClick={next} style={index < props.img_urls.length - 1 ? { visibility: "visible" } : { visibility: "hidden" }}> {'>'} </button>
            </div>
        </div>
    )
}

export default Carousel