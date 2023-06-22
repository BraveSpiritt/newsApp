import './Product.css'
import React from "react";


const Product = ({ name, priceLined, price, stars, button }) => {
    // stars = {<span className='star'></span>}
    return (
        <div className="prodParent">
            <div className="prodChild1">
                <img className='emptyImg' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
            </div>
            <div className="prodChild2">
                <p>{name}</p>
                <img style={{border: 'none'}} className='starImg' src={stars}/>
                <div className='priceDiv'>
                    <p className='liner'>{priceLined}</p>
                    <p>{price}</p>
                </div>
                <button className='soldBtn'>{button}</button>
            </div>
        </div>
    )
}


export default Product;