import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>See our latest news and services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/zucc.jpg'
              text='Mark Zuckerberg Confirmed to be Robot'
              label='News'
              path='/news'
            />
            <CardItem
              src='/images/data-leak.jpeg'
              text='Shell4J - New Java Exploit in Logging Tool "Log4J"'
              label='News'
              path='/news'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/cloud.png'
              text='New Azure Cloud Architecture Bundle'
              label='Services'
              path='/services'
            />
            <CardItem
              src='/images/saas.jpg'
              text='Breaking the monolith. Turning your monolithic service into microservices.'
              label='Product'
              path='/products'
            />
            <CardItem
              src='/images/code-screen.jpg'
              text='Web Development at affordable prices.'
              label='Product'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
