import React from 'react';
import '../App.css';
import './Testimonials.css';

function Testimonials() {
    return (
        <section className="testimonial">
            <div className="testimonial-wrapper">
                <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/women/48.jpg" alt="Tammy Stevens"/>
                <div className="testimonial-quote">
                    <p>
                        Nullam commodo non ante et lacinia. Pellentesque aliquet imperdiet orci, ac aliquam ligula suscipit vitae. Mauris id ipsum eros. Nunc imperdiet augue ut vestibulum ullamcorper. Donec augue odio, sagittis non neque quis, tempus gravida dui. Ut dapibus iaculis justo vitae vestibulum. Maecenas ante felis, iaculis sed dignissim sed, luctus non odio. Aliquam bibendum nisl a elit tempus hendrerit. Aenean tempor tristique lectus, efficitur ornare nunc semper quis.
                    </p>
                </div>
                <p className="testimonial-name">
                    Tammy Stevens<span> · Front End Developer</span>
                </p>
            </div>
            <br></br>
            <div className="testimonial-wrapper">
                <img className="testimonial-avatar" src="images/trump.png" alt="Donald Trump"/>
                <div className="testimonial-quote">
                    <p>
                        This isn't Twitter..!
                    </p>
                </div>
                <p className="testimonial-name">
                    Donald Trump<span> · Ex-President of the USA</span>
                </p>
            </div>
            <br></br>
            <div className="testimonial-wrapper">
                <img className="testimonial-avatar" src="images/donnelly.jpg" alt="Stephen Donnelly"/>
                <div className="testimonial-quote">
                    <p>
                        We should hire this guy for the next HSE Website!
                    </p>
                </div>
                <p className="testimonial-name">
                    Stephen Donnelly<span> · Minister for Health</span>
                </p>
            </div>
            <br></br>
            <div className="testimonial-wrapper">
                <img className="testimonial-avatar" src="images/34.jpg" alt="John Smith"/>
                <div className="testimonial-quote">
                    <p>
                        Nullam commodo non ante et lacinia. Pellentesque aliquet imperdiet orci, ac aliquam ligula suscipit vitae. Mauris id ipsum eros. Nunc imperdiet augue ut vestibulum ullamcorper. Donec augue odio, sagittis non neque quis, tempus gravida dui. Ut dapibus iaculis justo vitae vestibulum. Maecenas ante felis, iaculis sed dignissim sed, luctus non odio. Aliquam bibendum nisl a elit tempus hendrerit. Aenean tempor tristique lectus, efficitur ornare nunc semper quis.
                    </p>
                </div>
                <p className="testimonial-name">
                    John Smith<span> · Senior Software Developer</span>
                </p>
            </div>
            <br></br>
            <div className="testimonial-wrapper">
                <img className="testimonial-avatar" src="images/me.jpg" alt="Cillian Keogh"/>
                <div className="testimonial-quote">
                    <p>
                        Designing this website and developing it entirely in React.JS with no previous experience of the language was the single most painful experience of my life. Overall, I would rate the service provided 9/10 however the experience only a 2/10.
                    </p>
                </div>
                <p className="testimonial-name">
                    Cillian Keogh<span> · Designer & Developer</span>
                </p>
            </div>
            <br></br>
        </section>

    );
}

export default Testimonials;
