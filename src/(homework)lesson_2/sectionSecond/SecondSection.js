import Product from "./childProduct/Product";
import './secondSection.css'
import React from "react";


const SecondSection = () => {
    return (
        <div className="secondSection">
            <div className="positioning">
                <Product name='Fancy Product' price='$40.00 - $80.00'  button='View options'/>
                <Product name='Special Item' stars='http://surl.li/gyrzc' priceLined='$20.00' price='$18.00' button='Add to cart'/>
                <Product name='Sale Item' priceLined='$50.00' price='$25.00' button='Add to cart'/>
                <Product name='Popular Item' stars='http://surl.li/gyrzc' price='$40.00' button='Add to cart'/>
                <Product name='Sale Item' priceLined='$50.00' price='$25.00' button='Add to cart'/>
                <Product name='Fancy Product' price='$120.00 - $180.00'  button='View options'/>
                <Product name='Special Item' stars='http://surl.li/gyrzc' priceLined='$20.00' price='$18.00' button='Add to cart'/>
                <Product name='Popular Item' stars='http://surl.li/gyrzc' price='$40.00' button='Add to cart'/>
            </div>
        </div>
    )
}


export default SecondSection;