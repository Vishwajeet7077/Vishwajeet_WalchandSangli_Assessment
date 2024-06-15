import React from "react";
import Navbar from "./navbar";
import SearchBar from "./search";
import HomeDiv1 from "./HomeDiv1";
import HomeDiv2 from "./HomeDiv2";
function Home(){
    return(
        <div className="bg-background-img bg-repeat-y bg-cover">
        <Navbar />
        <SearchBar />
        <HomeDiv1 />
        <HomeDiv2 />
        </div>
    );
}

export default Home;