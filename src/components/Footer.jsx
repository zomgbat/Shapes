import { Link } from "react-router-dom";
import '../styles/Footer.css';
import MapComponent from "./Map";

function Footer() {
    return (
        <div className="footer-container">

            
            <footer className="dark-background footer">
                <div className="container">
                    <p>&copy; 2024 MyWebsite. All rights reserved.</p>
                </div>
                <section className="footer-section">
                    <h5>Contact Information</h5>
                    <address className="address"> gavalex7@aol.com </address>
                    <h5>Follow Us</h5>
                    <ul className="social-links">
                        
                        <li><a href="https://www.facebook.com/zomgbat">Facebook</a></li>
                        <li><a href="https://www.instagram.com/zomgbat">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/zomgbat">LinkedIn</a></li>
                        <li><a href="https://www.github.com/zomgbat">GitHub</a></li>
                    </ul>
                </section>
              
                    <MapComponent></MapComponent>
                
            </footer>
        </div>
    );
}

export default Footer;
