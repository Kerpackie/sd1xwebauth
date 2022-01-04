import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

      <section className='footer-subscription'>

        <p className='footer-subscription-heading'>
          Join the WA Web newsletter to receive our latest tech news.
        </p>

        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>

        <div className='input-areas'>
          <form>
            <input className='footer-input' name='email' type='email' placeholder='Your Email'/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>

      </section>

      <div class='footer-links'>

        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/testimonial'>Testimonials</Link>
            <Link to='/'>Terms of Service</Link>
          </div>

          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sales</Link>
          </div>

        </div>

        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{ pathname: "https://github.com/Kerpackie" }} target="_blank"> Github </Link>
            <Link to={{ pathname: "https://gitlab.com/Kerpackie" }} target="_blank"> Gitlab </Link>
            <Link to='/'>LinkedIn</Link>
          </div>

        </div>

      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>

          <div class='footer-logo'>
            <Link to='/' className='social-logo'>WA Web<i class='fab fa-typo3' /></Link>
          </div>

          <small class='website-rights'>Web WA © 2022</small>

          <div class='social-icons'>
            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'><i class='fab fa-facebook-f' /></Link>
            <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'><i class='fab fa-instagram' /></Link>
            <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'><i class='fab fa-youtube' /></Link>
            <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'><i class='fab fa-twitter' /></Link>
            <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'><i class='fab fa-linkedin' /></Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Footer;
