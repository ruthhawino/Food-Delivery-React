import React from "react";
import './style.css';
import ChickenBurger from './chicken burger.png';
import ChickenPizza from './chickenPizza.png';
import FrenchFries from './FrenchFries.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Images = () => {
    return (
        <div className="chicken">
            <div className="burger">
                <img src={ChickenBurger} alt="ChickenBurger" />
                <div className="text-container">
                    <h9 className="burg">Chicken Burger</h9>
                    <br/>
                    <p9 className="ordern">
                        Order Now <FontAwesomeIcon icon={faChevronRight} />
                    </p9>
                </div>
            </div>
            <div className="burger">
                <img src={ChickenPizza} alt="Chicken Pizza" />
                <div className="text-container">
                    <h9 className="burg">Chicken Pizza</h9>
                    <br/>
                    <p9 className="ordern">
                        Order Now <FontAwesomeIcon icon={faChevronRight} />
                    </p9>
                </div>
            </div>
            <div className="burger">
                <img src={FrenchFries} alt="French Fries" />
                <div className="text-container">
                    <h9 className="burg">French Fries</h9>
                    <br/>
                    <p9 className="ordern">
                        Order Now <FontAwesomeIcon icon={faChevronRight} />
                    </p9>
                </div>
            </div>
        </div>
    );
}

export default Images;
