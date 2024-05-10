import React from 'react';
import '../styles/AboutPage.css'; // Importing the CSS file


function AboutPage() {
    return (
        <div className="container">
            <header>
                
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="about">
                    <h2>About</h2>
                    <p>
                        Some stories taken from ststworld (my old employer) – where the idea came from – but all stories written and researched by myself.
                    </p>
                </section>
            </main>
            <footer>
                <p>Contact: <a href="https://instagram.com/zomgbat">instagram.com/zomgbat</a></p>
                <img className="imagegav" src="https://ourshapes.wordpress.com/wp-content/uploads/2024/01/unnamed.jpg" alt="Our Shapes Logo" />
            </footer>
        </div>
        
    );
}




export default AboutPage;
