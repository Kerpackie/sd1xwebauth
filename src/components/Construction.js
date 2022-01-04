import React from 'react';
import '../App.css';
import { Button } from './HomeButton';
import './HeroSection.css';

function Construction() {
    return (
        <div className='hero-container'>
            <video src='./sd1xwebauth/videos/under-construction.mp4' autoPlay loop muted />
            <h1>Oh no!</h1>
            <p>This section is under construction!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Get me outta here!
                    <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default Construction;
