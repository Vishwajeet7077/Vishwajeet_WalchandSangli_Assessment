import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="bg-gray-100 py-12 m-2 rounded-xl">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        HandCraft is dedicated to bringing you unique, handmade crafts that are crafted with passion and dedication. We strive to use sustainable materials and traditional techniques to create products that are both beautiful and eco-friendly.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                        Our journey began in 2023, when we started our small workshop with the dream of sharing our love for handmade crafts with the world. Since then, we have grown into a small business known for our quality and craftsmanship.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
