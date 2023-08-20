import React from "react";
import './style.css';
import sandwichImage from './Sandwich.png';
import Man from './man.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faPlay,faTruck,faRecycle } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
    return (
        <div className="page">
            <p>All Fast Food is Available at <br/><span>Foodle</span></p>
            <div className="body">
            <img src={Man} alt="Man" />
            <p2>We Are Just A Click Away When You Crave For Delicious<br/> Fast Food</p2>
            </div>
            <div className="image">
                <img src={sandwichImage} alt="Sandwich" />
            </div>
            <div className="paragraph">
                <button className="btn2">
                    <FontAwesomeIcon icon={faShoppingBag} /> Buy Now
                </button>
                <p3 className="play">
                    <FontAwesomeIcon icon={faPlay} /> How To Order
                </p3>
            </div>
            <div className="orders">
                <div className="delivery">
                <FontAwesomeIcon className="truck" icon={faTruck} />   
                   <h4>Fast Delivery</h4>      
                   <p4>The Food Will Be Delivered To<br/>
                    Your Home Within 1-2 Hours Of<br/>
                    Your Ordering</p4>
                </div>
                <div className="delivery">
                <FontAwesomeIcon  className="truck"icon={faRecycle} /> 
                <h4>Fresh Food</h4>
                <p4>Your Food Will Be delivered<br/>
                100% Fresh To Your Home.We<br/>
                Do Not Deliver Stale Food</p4>
                   
                </div>
                <div className="free">
                <FontAwesomeIcon className="truck" icon={faTruck} />
                    <h4>Free Delivery</h4>
                    <p7>Your Food Delivery Is<br/>
                    Absolutely Free No Cost <br/>
                    Just Order And Enjoy</p7>
                </div>
            </div>
        </div>
    );
}

export default Page;
