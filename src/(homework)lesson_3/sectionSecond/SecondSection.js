import Product from "./childProduct/Product";
import Stars from './stars.png'
import './childProduct/Product.css'
import './secondSection.css'
import React from "react";

const arr = [{ id: 1, name: 'Fancy Product', price: '$40.00 - $80.00', button: 'View options' },
{ id: 2, name: 'Special Item', stars: '/static/media/stars.0e61a8b4b65f7549b0d8.png', priceLined: '$20.00', price: '$18.00', button: 'Add to cart' },
{ id: 3, name: 'Sale Item', priceLined: '$50.00', price: '$25.00', button: 'Add to cart' },
{ id: 4, name: 'Popular Item', stars: '/static/media/stars.0e61a8b4b65f7549b0d8.png', price: '$40.00', button: 'Add to cart' },
{ id: 5, name: 'Sale Item', priceLined: '$50.00', price: '$25.00', button: 'Add to cart' },
{ id: 6, name: 'Fancy Product', price: '$120.00 - $180.00', button: 'View options' },
{ id: 7, name: 'Special Item', stars: '/static/media/stars.0e61a8b4b65f7549b0d8.png', priceLined: '$20.00', price: '$18.00', button: 'Add to cart' },
{ id: 8, name: 'Popular Item', stars: '/static/media/stars.0e61a8b4b65f7549b0d8.png', price: '$40.00', button: 'Add to cart' }]


const SecondSection = () => {
    return (
        <div className="secondSection">
            <div className="positioning">
                {arr.map((e) => {
                    return <div key={e.id} className="prodParent">
                        <div className="prodChild1">
                            <img className='emptyImg' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                        </div>
                        <div className="prodChild2">
                            <p>{e.name}</p>
                            <img style={{ border: 'none' }} className='starImg' src={e.stars} />
                            <div className='priceDiv'>
                                <p className='liner'>{e.priceLined}</p>
                                <p>{e.price}</p>
                            </div>
                            <button className='soldBtn'>{e.button}</button>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}





export default SecondSection;






{/* <Product name='Fancy Product' price='$40.00 - $80.00' button='View options' />
<Product name='Special Item' stars='https://o.remove.bg/downloads/49aa370c-9593-479f-891f-b40712f05acd/rating-stars-vector-web-signs-260nw-1911395551-removebg-preview.png' priceLined='$20.00' price='$18.00' button='Add to cart' />
<Product name='Sale Item' priceLined='$50.00' price='$25.00' button='Add to cart' />
<Product name='Popular Item' stars='https://o.remove.bg/downloads/49aa370c-9593-479f-891f-b40712f05acd/rating-stars-vector-web-signs-260nw-1911395551-removebg-preview.png' price='$40.00' button='Add to cart' />
<Product name='Sale Item' priceLined='$50.00' price='$25.00' button='Add to cart' />
<Product name='Fancy Product' price='$120.00 - $180.00' button='View options' />
<Product name='Special Item' stars='https://o.remove.bg/downloads/49aa370c-9593-479f-891f-b40712f05acd/rating-stars-vector-web-signs-260nw-1911395551-removebg-preview.png' priceLined='$20.00' price='$18.00' button='Add to cart' />
<Product name='Popular Item' stars='https://o.remove.bg/downloads/49aa370c-9593-479f-891f-b40712f05acd/rating-stars-vector-web-signs-260nw-1911395551-removebg-preview.png' price='$40.00' button='Add to cart' /> */}