import React from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ChickenBurger2 from './chickenBurger2.jpeg'
import ChickenPizza2 from './chickenPizza2.jpeg'
import ChickenFry from './chickenFry.jpeg'
import GrillSandwich from './humberger3.png'
import TacoTraifi from './humberger1.png'
import NoddlesRamen from './humberger2.png'
import hamb from './hamb.png'
import hamb2 from './hamb2.png'
import hamb3 from './hamb3.png'

const Menu=()=>{
    return(
        <div className="menu">
            <div className="h10">
            <div className="our">
            <h5>Our <span className="deliver">Regular</span> Menu</h5>
            </div>
            <div className="menu">
            <div className="menu-content">
                <div className="regular-menu">
                    <p className="p">These are Our Regular Menus. You can Order Anything You Like.</p>
                    </div>
                    <div className="butn">
                    <button className="btn4">See All</button>
                    </div>

<div class="chicken-products">
    <div class="chickn-products2">
        <img class="burger-image" src={ChickenBurger2} alt="Chicken Burger2" />
        <p class="burger">Chicken Burger</p>
        <div class="pp">
            <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(112)
        </div>
        <p class="black">$3.50</p><button class="btn1">Buy Now</button>
    </div>
    <div class="chickn-products2">
        <img class="burger-image1" src={ChickenPizza2} alt="Chicken Pizza" />
        <p class="burger">Chicken Pizza</p>
        <div class="pp">
            <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(112)
        </div>
        <p class="black">$4.20</p><button class="btn1">Buy Now</button>
    </div>
    <div class="chickn-products2">
        <img class="burger-image" src={ChickenFry} alt="Chicken Fry" />
        <p class="burger">Chicken Fry</p>
        <div class="pp">
            <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(112)
        </div>
        <p class="black">$5.00</p>
<button class="btn1">Buy Now</button>
    </div>
</div>
                     <div className="chicken-products">
                        <div className="chickn-products2">
                    <img className="burger-image" src={ChickenBurger2} alt="Chicken Burger2" />
                        <p className="burger">Chicken Burger</p>
                        <div className="pp">
                    <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(112)
                    </div>                    <p className="black">$3.50</p>  <button className="btn1">Buy Now</button> 
                    </div>
                    <div className="chickn-products2">
                    <img className="burger-image1" src={ChickenPizza2} alt="Chicken Pizza" />
                        <p className="burger">Chicken Pizza</p>
                        <div className="pp">
                    <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(112)
                    </div>                    <p className="black">$4.20</p>  <button className="btn1">Buy Now</button> 
                    </div>
                    <div className="chickn-products2">
                    <img className="burger-image" src={ChickenFry} alt="Chicken Fry" />
                        <p className="burger">Chicken Fry</p>
                        <div className="pp">
                    <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(112)
                    </div>                    <p className="black">$5.00</p>  <button className="btn1">Buy Now</button> 
                    </div>
                    </div>
                    <div className="image-container"> 
   <img className="image7" src={hamb} alt="Burger Image" /> 
 <div className="stacked-images">
    <img className="image8" src={hamb2} alt="Tafb Image" />
    <img className="image9" src={hamb3} alt="Tortilla Image" />
  </div> 
 </div>

            </div>
        </div>
            </div>
        </div>
    )
}
export default Menu