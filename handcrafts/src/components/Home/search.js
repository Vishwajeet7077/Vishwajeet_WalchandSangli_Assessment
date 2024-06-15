import React from "react";
import searchIcon from "../images/searchIcon.jpg";
import "../styles/searchbar.css"; // Import your custom CSS file

function SearchBar() {
    return (
        <div className="h-10 border-2 border-slate-400 m-3 rounded-lg p-1 flex items-center space-x-1 overflow-hidden">
            <div className="flex items-center ml-4">
                <img className="h-7" src={searchIcon} alt="Search" />
                <input className="w-40 h-7 ml-2 rounded-sm pl-2 mr-6 focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search" />
            </div>
            <div className="flex-grow text-xl ml-2 text-gray-700 overflow-hidden">
                <p className="m-0">
                    <span className="marquee">
                        Sales are available for this Christmas season from December 1, 2023, to December 20, 2023, offering customers an exclusive opportunity to enjoy special discounts and promotions on our handmade crafts. Don't miss out on this limited-time offer to find unique gifts for your loved ones! {" "}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default SearchBar;