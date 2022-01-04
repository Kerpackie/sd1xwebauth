import React from 'react';
import '../Cards.css';
import data from './data';
import ProductCard from "./ProductCard";

function ProductCards() {
    return (
    <div className='cards'>
        <h1>Our latest design and hosting products!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {data.map(product => (
                        <ProductCard key={product.name}
                                     title = {product.name}
                                     image = {product.image}
                                     lineOne = {product.lineOne}
                                     lineTwo = {product.lineTwo}
                                     lineThree = {product.lineThree}
                                     lineFour = {product.lineFour}
                                     lineFive = {product.lineFive}
                                     lineSix = {product.lineSix}
                                     cost = {product.cost}
                                     label={product.name}
                                     path='/'/>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    );
}

export default ProductCards;
