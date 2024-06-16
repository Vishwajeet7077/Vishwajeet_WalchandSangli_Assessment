import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handmadeJewelry from '../images/Handmade Jewellry.png';
import homedecor from "../images/Home Decor.png";
import accessories from "../images/Accessories.png";
import seasonalCraft from "../images/seasonal craft.png";
import customerOrder from "../images/customer order.png";
import customerFavorite from "../images/customer favorite.png";
function HDiv1() {
    return (
        <div className="min-h-max border-2 border-slate-400 m-3 flex flex-col sm:flex-row rounded-xl ">
            <div className="sm:w-1/2 w-full sm:m-3 mt-3 sm:mt-12">
                <div className="font-bold text-2xl p-2 mt-8 ml-10 font-playwrite-fr-moderne">
                    Handcrafted with Passion
                </div>
                <p className="p-5 pt-0 mt-10 text-justify text-xl">
                    Discover unique handmade crafts that are crafted with passion and dedication. Our products are made using sustainable materials and traditional techniques.
                </p>
            </div>
            <div className="sm:w-1/2 w-full grid grid-cols-2 sm:grid-cols-3 place-content-center gap-4 sm:p-3 p-1">
                <div className="border-2 border-slate-400 h-48 w-auto rounded-xl p-2 text-center font-semibold relative">
                    <img src={handmadeJewelry} alt="Handmade Jewelry" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Handmade Jewelry</p>
                </div>
                <div className="border-2 border-slate-400 h-48 w-auto rounded-xl p-2 text-center font-semibold relative">
                    <img src={homedecor} alt="Home Decor" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Home Decor</p>
                </div>
                <div className="border-2 border-slate-400 h-48 w-auto rounded-xl p-2 text-center font-semibold">
                    <img src={accessories} alt="Home Decor" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Accessories</p>
                </div>
                <div className="border-2 border-slate-400 h-48 w-auto rounded-xl p-2 text-center font-semibold">
                    <img src={seasonalCraft} alt="Home Decor" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Seasonal Crafts</p>
                </div>
                <div className="border-2 border-slate-400 h-48 w-auto rounded-xl p-2 text-center font-semibold">
                    <img src={customerOrder} alt="Home Decor" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Custom Orders</p>
                </div>
                <div className="border-2 border-slate-400 h-48 w-auto rounded-xl p-2 text-center font-semibold">
                    <img src={customerFavorite} alt="Home Decor" className="h-32 w-32 object-cover rounded-lg shadow-lg mx-auto mt-2" />
                    <p className="mt-2">Customer Favorites</p>
                </div>
            </div>
        </div>
    );
}

export default HDiv1;
