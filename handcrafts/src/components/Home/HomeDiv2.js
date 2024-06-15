import axios from "axios";
import handmade from '../images/services/handmade.jpg';
import React, { useState, useEffect } from "react";

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

    return (
        <div id="products" className="m-2 flex flex-wrap justify-center items-center gap-12 p-4 bg-customBackground-100 rounded-xl p-10">
            {
                serviceDiv.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center border-2 border-slate-400 p-2 rounded-lg"
                        style={{ minWidth: "120px", maxWidth: "200px" }}
                    >
                        <div className="w-20 h-20 rounded-xl">
                            <img src={item.image_link} alt={item.id} className="rounded-xl border-2 h-20 w-20 m-auto mt-1" />
                        </div>
                        <p className="text-center mt-1">{item.id}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default HomeDiv2;
