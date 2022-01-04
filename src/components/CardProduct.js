import React from 'react';
import { Link } from 'react-router-dom';

function CardProduct(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img className='cards__item__img' alt='Image' src={props.src}/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__head'>{props.title}</h5>
                        <p className='cards__item__text'>{props.description}</p>
                        <p className='cards__item__price'>{props.text}</p>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardProduct;


