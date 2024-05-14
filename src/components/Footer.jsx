import { Link } from "react-router-dom";
import '../styles/Footer.css'

function Footer() {
    return (
        <>
            <nav className="footer">


                <footer className="dark-background footer">
                    <div className="container">
                        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
                    </div>
                    <section>
                        <h5>Contact Information</h5>
                        <address className="address">El Clot, Barcelona </address>
                        <h5>Follow Us</h5>
                        <ul>
                            <li><a href="https://www.twitter.com/zomgbat">Twitter</a></li>
                            <li><a href="https://www.facebook.com/zomgbat">Facebook</a></li>
                            <li><a href="https://www.instagram.com/zomgbat">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/in/zomgbat">LinkedIn</a></li>
                            <li><a href="https://www.github.com/zomgbat">GitHub</a></li>
                        </ul>
                    </section>
                
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sIronhack!5e0!3m2!1sen!2ses!4v1495208746099" className="map-frame" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                </footer>
                   


            </nav>
        </>
    )
}

export default Footer;