import React from "react";
import Navbar from "./navbar";
import SearchBar from "./search";
import HomeDiv1 from "./HomeDiv1";
import HomeDiv2 from "./HomeDiv2";
import HomeDiv3 from "./HomeDiv3";
import HomeDiv4 from "./HomeDiv4";
import Footer from "./Footer";
import ContactForm from "./contact";

function Home() {
    return (
        <div className="bg-background-img bg-repeat-y bg-cover">
            <Navbar/>
            <SearchBar />
            <HomeDiv1 />
            <HomeDiv2 />
            <HomeDiv3 />
            <HomeDiv4 />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Home;