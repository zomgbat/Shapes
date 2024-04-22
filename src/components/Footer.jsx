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
                        <h5> Contact Information </h5>
                        <address className="address">IronSkydive <br /> 226 Boulevard Voltaire, <br /> 75011 Paris, <br /> France <br />
                            +33 1 79 75 40 00</address>
                        <h5> Follow Us </h5>
                        <ul>
                            <li> <a href="#"> Twitter </a> </li>
                            <li> <a href="#"> Facebook </a> </li>
                            <li> <a href="#"> Instagram </a> </li>
                        </ul>
                    </section>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sIronhack!5e0!3m2!1sen!2ses!4v1495208746099"
                        className="map-frame" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                </footer>

                <Link className='aboutUs' to='/about'> About </Link>
                <a href="https://github.com/BarbaraLan" className="git"> gitHub</a>
            </nav>
        </>
    )
}

export default Footer;