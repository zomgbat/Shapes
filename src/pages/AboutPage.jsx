import React from 'react';
import '../styles/AboutPage.css'; // Importing the CSS file

function AboutPage() {
    return (
        <div className="container">
            <main>
                <section id="about" className="section-box yellow-border">
        
                    <p className="pabout">
                        Some stories taken from ststworld (my old employer) – where the idea came from – but all stories written and researched by myself.
                    </p>
                </section>
            </main>
            <footer className="footer">
                <p>Contact: <a href="https://instagram.com/zomgbat">instagram.com/zomgbat</a></p>
                <img className="imagegav" src="https://ourshapes.wordpress.com/wp-content/uploads/2024/01/unnamed.jpg" alt="Our Shapes Logo" />
            </footer>
        </div>
    );
}

export default AboutPage;
