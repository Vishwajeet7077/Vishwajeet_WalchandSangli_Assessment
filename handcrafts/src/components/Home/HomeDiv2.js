import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import lazy from "../images/lazy.png";

function HomeDiv2() {
    const ServicesMeta = "http://localhost:1000/services";

    const [serviceDiv, setServiceDiv] = useState([]);
    const [errorMessage, setError] = useState('');

    useEffect(() => {
        axios.get(ServicesMeta)
            .then((response) => {
                setServiceDiv(response.data);
            })
            .catch((error) => {
                setError('Error fetching data:', error.message);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="m-2 p-4 bg-customBackground-100 rounded-xl p-10">
            <Slider {...settings}>
                {
                    serviceDiv.map((item) => (
                        <div key={item.id} className="p-2">
                            <div className="flex flex-col items-center border-2 border-slate-400 p-2 rounded-lg" style={{ minWidth: "120px", maxWidth: "200px" }}>
                                <div className="w-18 h-24 rounded-full overflow-hidden">
                                    <img src={lazy} alt={item.id} className="h-full w-full object-cover" />
                                </div>
                                <p className="text-center mt-1">{item.id}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default HomeDiv2;
