import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard(props) {

    const {name, image, lineOne, lineTwo, lineThree, lineFour, lineFive, lineSix, cost} = props;

    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img className='cards__item__img' alt='Image' src={image}/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__head'>{props.title}</h5>
                        <br/>
                        <p className='cards__product__text'>{name}</p>
                        <p className='cards__product__text'>{lineOne}</p>
                        <p className='cards__product__text'>{lineTwo}</p>
                        <p className='cards__product__text'>{lineThree}</p>
                        <p className='cards__product__text'>{lineFour}</p>
                        <p className='cards__product__text'>{lineFive}</p>
                        <p className='cards__product__text'>{lineSix}</p>
                        <p className='cards__item__price'>{cost}</p>
                    </div>
                </Link>
            </li>
        </>
    );
};


