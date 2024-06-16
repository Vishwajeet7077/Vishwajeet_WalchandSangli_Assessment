import React, { useState, useEffect } from "react";
import axios from "axios";
import tatalogo from '../images/tata.jpg';
import '../styles/homeDiv3.css';

const companyData = process.env.REACT_APP_COMPANY_API;
function HomeDiv3() {

    // Local Port Json Server
    // const companyData = 'http://localhost:1000/companies';

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get(companyData)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error.message);
            });
    }, []);

    return (
        <div className="max-h-500 border-2 border-slate-400 m-3 p-4 flex flex-col relative rounded-lg">
  <div className="company-container">
    <h3 className="company-title">Collaborated With</h3>
    <div className="flex flex-wrap flex-col justify-center items-center max-h-64 overflow-x-auto hide-scrollbar">
      {data.map((comp) => (
        <div key={comp.id} className="company-card">
          <img src={tatalogo} className="company-logo" alt="Company Logo" />
          <p className="company-name">{comp.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>


    )
}

export default HomeDiv3;