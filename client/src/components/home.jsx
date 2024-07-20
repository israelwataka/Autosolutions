import React from 'react';
import './home.scss';
import Newsletter from './newsletter';
import OurPartners from './OurPartners';

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="header">
                <h1>Welcome to Auto Solutions</h1>
                <nav>
                    <ul>
                        <li><a href="services">Services</a></li>
                        <li><a href="about">About Us</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="welcome">
                    <h2>Your One-Stop Shop for All Auto Services</h2>
                    <p>We provide a wide range of auto solutions to keep your vehicle in top condition.</p>
                </section>
                <section id="services" className="services">
                    <h2>Our Services</h2>
                    <div className="service-list">
                        <div className="service-item">
                            <h3>ALEXANDER</h3>
                            <p>Keep your engine running smoothly with our comprehensive oil change service.</p>
                        </div>
                        <div className="service-item">
                            <h3>Brake Repair</h3>
                            <p>Ensure your safety with our professional brake repair and replacement services.</p>
                        </div>
                        <div className="service-item">
                            <h3>Battery Replacement</h3>
                            <p>Get a reliable battery installed by our experts.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Newsletter/>
            {/* <OurPartners/> */}
            <footer className="footer">
                <p>&copy; 2024 Auto Solutions. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default HomePage;
