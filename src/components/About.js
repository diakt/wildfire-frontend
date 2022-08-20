import React from 'react';
import Footer from './Footer';
import { LoremIpsum } from 'react-lorem-ipsum'

function About() {
    return (
        <div className='about'>
            <h2 className="about-title">Guide and discourse</h2>
            <div className="discourse">
                <section className="about-section">
                    <p className="about-text"><LoremIpsum /><LoremIpsum /></p>
                    <img className="about-image" src="https://helios-i.mashable.com/imagery/articles/00qAsi7aqMl65jO9W48zep5/hero-image.fill.size_1248x702.v1623363862.jpg" />
                </section>
                
                <section className="about-section">
                    <p className="about-text"><LoremIpsum /></p>
                    <img className="about-image" src="https://helios-i.mashable.com/imagery/articles/00qAsi7aqMl65jO9W48zep5/hero-image.fill.size_1248x702.v1623363862.jpg" />
                </section>

                <section className="about-section">
                    <p className="about-text"><LoremIpsum /></p>
                    <img className="about-image" src="https://helios-i.mashable.com/imagery/articles/00qAsi7aqMl65jO9W48zep5/hero-image.fill.size_1248x702.v1623363862.jpg" />
                </section>

                <section className="about-section">
                    <p className="about-text"><LoremIpsum /></p>
                    <img className="about-image" src="https://helios-i.mashable.com/imagery/articles/00qAsi7aqMl65jO9W48zep5/hero-image.fill.size_1248x702.v1623363862.jpg" />
                </section>
                
            </div>

            
            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default About;