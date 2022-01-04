import React from 'react';
import '../Cards.css';
import data from './data';
import ServiceCard from "./ServiceCard";
import dataTwo from "./dataTwo";

function ServiceCards() {
    return (
        <div className='cards'>
            <h1>Our latest service offerings!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {data.map(product => (
                            <ServiceCard key={product.name}
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
                                         path='/services'/>
                        ))}
                    </ul>
                    <ul className='cards__items'>
                        {dataTwo.map(product => (
                            <ServiceCard key={product.name}
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
                                         path='/services'/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;
