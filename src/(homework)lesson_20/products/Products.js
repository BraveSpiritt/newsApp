import React from 'react';
import styles from './Products.module.css'


const Products = () => {

    const store = {
        firstElement: {
            id: 1,
            textTitile: 'BLENDED TO PEFECTION',
            textDescription: 'COFFEES & TEAS'
        },
        secondElement: {
            id: 2,
            textTitile: 'DELICIOUS TREATS, GOOD EATS',
            textDescription: 'BAKERY & KITCHEN'
        },
        secondElement: {
            id: 3,
            textTitile: 'BLENDED TO PEFECTION',
            textDescription: 'BULK SPECIALITY BLENDS'
        }

    }


    const ProductsChild = () => {
        return (
            <div>
                <h1></h1>
            </div>
        )
    }


    return (
        <div className={styles.parentDiv}>
            <div className={styles.firstElement}>
                <div className={styles.firstElem}>
                    <h3>BLENDED TO PEFECTION</h3>
                    <h1>COFFEES & TEAS</h1>
                </div>
                <img style={{ width: '800px', marginLeft: '400px', marginTop: '200px', borderRadius: '10px' }} src={require('./products-01.jpg')} />
                <div className={styles.lastElement}>
                    <span>We take pride in our work, and it shows. Every time you
                        order a beverage from us, we guarantee that it will be
                        an experience worth having. Whether it's our world famous
                        Venezuelan Cappuccino, a refreshing iced herbal tea, or
                        something as simple as a cup of speciality sourced black
                        coffee, you will be coming back for more.
                    </span>
                </div>
            </div>
            <div>
                <div className={styles.firstElem}>
                    <h3>DELICIOUS TREATS, GOOD EATS</h3>
                    <h1>BAKERY & KITCHEN</h1>
                </div>
                <img style={{ width: '800px', marginLeft: '400px', marginTop: '200px', borderRadius: '10px' }} src={require('./products-02.jpg')} />
                <div className={styles.lastElement}>
                    <span>Our seasonal menu features delicious snacks, baked goods, and
                        even full meals perfect for breakfast or lunchtime. We source our
                        ingredients from local, oragnic farms whenever possible, alongside
                        premium vendors for specialty goods.
                    </span>
                </div>
            </div>
            <div>
                <div className={styles.firstElem}>
                    <h3>BLENDED TO PEFECTION</h3>
                    <h1>BULK SPECIALITY BLENDS</h1>
                </div>
                <img style={{ width: '800px', marginLeft: '400px', marginTop: '200px', borderRadius: '10px' }} src={require('./products-03.jpg')} />
                <div className={styles.lastElement}>
                    <span>Travelling the world for the very best quality coffee
                        is something take pride in. When you visit us, you'll
                        always find new blends from around the world, mainly
                        from regions in Central and South America. We sell our
                        blends in smaller to large bulk quantities.
                        Please visit us in person for more details.
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Products;