import {InstagramLogo, TwitterLogo} from "phosphor-react";
import "./Footer.css";
const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-header">
                    <h3>Sneakearth</h3>
                    <p>Explore the world of sneakers.</p>
                </div>
                <div className="footer-section">
                    <div className="list-items">
                        <div className="left-items">
                            <ul>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/buy">Buy</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <ul>
                            <div className="right-items">
                                <li>
                                    <a href="/sell">Sell</a>
                                </li>
                                <li>
                                    <a href="/support">Support</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="follow">
                        <h3>Follow Us</h3>
                        <ul className="social-media-links">
                            <li>
                                <a href="https://www.instagram.com/ebrahim_afridi12" target="_blank" rel="noopener noreferrer">
                                    <InstagramLogo size={25} color="#fff" weight="fill" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/EbrahimAfridi3" target="_blank" rel="noopener noreferrer">
                                    <TwitterLogo size={25} color="#fff  " weight="fill" />
                                </a>
                            </li>
                            {/* Add more social media icons as needed */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sneakearth. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;