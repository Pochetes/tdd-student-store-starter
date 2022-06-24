import * as React from "react"
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-header">
                <h3 className="footer-section">Categories</h3>
                <div>All Categories</div>
                <div>Clothing</div>
                <div>Food</div>
                <div>Accessories</div>
                <div>Tech</div>
            </div>
            <div className="footer-header">
                <h3 className="footer-section">Company</h3>
                <div>About Us</div>
                <div>Find a Store</div>
                <div>Terms</div>
                <div>Sitemap</div>
                <div>Careers</div>
            </div>
            <div className="footer-header">
                <h3 className="footer-section">Support</h3>
                <div>Contact Us</div>
                <div>Money Refund</div>
                <div>Order Status</div>
                <div>Shipping Info</div>
                <div>Open Dispute</div>
            </div>
            <div className="footer-header">
                <h3 className="footer-section">Account</h3>
                <div>Login</div>
                <div>Register</div>
                <div>Account Setting</div>
                <div>My Orders</div>
            </div>
            <div className="footer-header">
                <h3 className="footer-section">Socials</h3>
                <div>Facebook</div>
                <div>Twitter</div>
                <div>LinkedIn</div>
                <div>Instagram</div>
                <div>YouTube</div>
            </div>
        </footer>
    )
}

export default Footer
