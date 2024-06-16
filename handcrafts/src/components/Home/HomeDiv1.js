import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handmadeJewelry from '../images/830x830/Handmade Jewellry.png';
import homedecor from "../images/830x830/Home Decor.png";
import accessories from "../images/830x830/Accessories.png";
import seasonalCraft from "../images/830x830/seasonal craft.png";
import customerOrder from "../images/830x830/customer order.png";
import customerFavorite from "../images/830x830/customer favorite.png";
import boy from "../images/boy-holding-big-pencil.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

function HDiv1() {
    return (
        <div className="min-h-max border-2 border-slate-400 m-3 flex flex-col sm:flex-row rounded-xl ">
            <div className="sm:w-1/2 w-full sm:m-3 mt-3 sm:mt-12">
                {/* <img src={boy} alt="Drawing" className="inline-block absolute w-24 h-40 bottom-[-1.5rem] left-15 " /> */}
                <div className="font-bold text-2xl p-2 mt-8 ml-10 font-playwrite-fr-moderne">
                    Handcrafted with Passion
                </div>
                <p className="p-5 pt-0 mt-10 text-justify text-xl">
                    Discover unique handmade crafts that are crafted with passion and dedication. Our products are made using sustainable materials and traditional techniques.
                </p>
            </div>
            <div className="sm:w-full grid grid-cols-2 sm:grid-cols-3 place-content-center gap-4 sm:p-3 p-1">
                <div className="border-2 border-slate-400 h-48 sm:h-auto w-40 sm:w-auto m-auto rounded-xl p-2 text-center font-semibold relative">
                    <img src={handmadeJewelry} alt="Handmade Jewelry" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Handmade Jewelry</p>
                </div>
                <div className="border-2 border-slate-400 h-48 sm:h-auto w-40 sm:w-auto m-auto rounded-xl p-2 text-center font-semibold relative">
                    <img src={homedecor} alt="Home Decor" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Home Interior</p>
                </div>
                <div className="border-2 border-slate-400 h-48 sm:h-auto w-40 sm:w-auto m-auto rounded-xl p-2 text-center font-semibold relative">
                    <img src={accessories} alt="Accessories" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Accessories Products</p>
                </div>
                <div className="border-2 border-slate-400 h-48 sm:h-auto w-40 sm:w-auto m-auto rounded-xl p-2 text-center font-semibold relative">
                    <img src={seasonalCraft} alt="Seasonal Crafts" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Seasonal Crafts</p>
                </div>
                <div className="border-2 border-slate-400 h-48 sm:h-auto w-40 sm:w-auto m-auto rounded-xl p-2 text-center font-semibold relative">
                    <img src={customerOrder} alt="Custom Orders" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Custom Orders</p>
                </div>
                <div className="border-2 border-slate-400 h-48 sm:h-auto w-40 sm:w-auto m-auto rounded-xl p-2 text-center font-semibold relative">
                    <img src={customerFavorite} alt="Customer Favorites" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Customer Favorites</p>
                </div>
            </div>
            <a href="#navbar" className="fixed bottom-10 right-10 w-12 h-12 rounded-3xl bg-white z-40 p-2"><FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" /></a>
        </div>
    );
}

export default HDiv1;
