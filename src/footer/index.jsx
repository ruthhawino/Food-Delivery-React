import React from "react";
import './style.css'
import { FaPinterest,FaInstagram, FaTwitter, FaFacebook  } from "react-icons/fa";
const Footer = () =>{
    return(
        <div class="footer">
        <div class="foodish">
        <h3 className="food">Foodish</h3>
        <p>Continue Food 2023 All right reserved </p>
        <h3 className="h3">Follow us on</h3>
        <div class="icon-container">
    <FaPinterest size={20} />
    <FaInstagram size={20} />
    <FaTwitter size={20} />
    <FaFacebook size={20} />
</div>
        </div>
        <div class="footer1">
        <h3 className="food">Information</h3>
            <p>Home</p>
            <p>Offer</p>
            <p>Service</p>
            <p>About Us</p>
        </div>
        <div class="footer2">
        <h3 className="food">Menu</h3>
            <p>Quality</p>
            <p>Make achoice</p>
            <p>Salada with vegetable </p>
            <p>Fast food delivery</p>
            <p>Subscribe</p>
        </div>
        <div class="footer3">
        <h3 className="food">Contact</h3>
            <p>Explore</p>
            <p>tel: +2540726794700</p>
            <p>Info @foodish.com</p>
            <p>1245, New York USA</p>
        </div>
        </div>
    );
}
export default Footer;