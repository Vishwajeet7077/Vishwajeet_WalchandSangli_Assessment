import React, { useState } from "react";
import Navbar from "./navbar";
import SearchBar from "./search";
import HomeDiv1 from "./HomeDiv1";
import HomeDiv2 from "./HomeDiv2";
import HomeDiv3 from "./HomeDiv3";
import HomeDiv4 from "./HomeDiv4";
import Footer from "./Footer";
import ContactForm from "./contact";

function Home() {
    const [contactForm, setContactForm] = useState(false);
    const displayContact = () => {
        setContactForm(!contactForm);
    }
    return (
        <div className="app-container flex flex-col min-h-screen">
            <div className="flex-grow bg-background-img bg-repeat-y bg-cover">
                <Navbar displayContact={displayContact} />
                <SearchBar />
                <HomeDiv1 />
                <HomeDiv2 />
                <HomeDiv3 />
                <HomeDiv4 />
                {contactForm && <ContactForm displayContact={displayContact} />} {/* Conditionally render ContactForm */}
            </div>
            <Footer />
        </div>


    );
}

export default Home;