import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import companyIcon from "../images/tata.jpg";

// const serviceList = process.env.REACT_APP_SERVICES_API;
const Footer = () => {
  const [footerData, setFooterData] = useState({
    companies: [],
    services: [],
    servicesSubtype: {}
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companiesResponse = await fetch("http://localhost:1030/companies");
        if (!companiesResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const companiesData = await companiesResponse.json();

        const servicesResponse = await fetch("http://localhost:1030/services");
        if (!servicesResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const servicesData = await servicesResponse.json();

        const servicesSubtypeResponse = await fetch("http://localhost:1030/servicesSubtype");
        if (!servicesSubtypeResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const servicesSubtypeData = await servicesSubtypeResponse.json();

        setFooterData({
          companies: companiesData,
          services: servicesData,
          servicesSubtype: servicesSubtypeData
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="footer" className="bg-gray-900 text-white py-10 px-5 w-full">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="footer-companies">
      <h2 className="text-xl font-bold mb-4">Our Companies</h2>
      <ul>
        {footerData.companies.map((company) => (
          <li key={company.id} className="mb-2 flex items-center">
            <img src={companyIcon} alt={company.name} className="w-8 h-8 mr-2 rounded-full" />
            {company.name}
          </li>
        ))}
      </ul>
    </div>

    <div className="footer-services">
      <h2 className="text-xl font-bold mb-4">Our Services</h2>
      <ul>
        {footerData.services.map((service) => (
          <li key={service.id} className="mb-2">
            <Link to={`/${service.id.toLowerCase()}`} className="text-blue-400 hover:underline">
              {service.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div className="footer-contact">
      <h2 className="text-xl font-bold mb-4">Contact Details</h2>
      <ul>
        <li className="mb-2 flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <pre>Email Id    <i>HandCraft247@gmail.com</i></pre>
        </li>
        <li className="mb-2 flex items-center">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          <pre>Phone No   <i>+91 7384848484</i></pre>
        </li>
        <li className="mb-2 flex items-center">
          <FontAwesomeIcon icon={faInstagram} className="mr-2" />
          <pre>Instagram  <i>HandCraft_247</i></pre>
        </li>
        <li className="mb-2 flex items-center">
          <FontAwesomeIcon icon={faTwitter} className="mr-2" />
          <pre>Twitter    <i>HandCraft_247</i></pre>
        </li>
        <li className="mb-2 flex items-center">
          <FontAwesomeIcon icon={faFacebook} className="mr-2" />
          <pre>FaceBook   <i>HandCraft_247</i></pre>
        </li>
        <li className="mb-2 flex items-center">
          <FontAwesomeIcon icon={faYoutube} className="mr-2" />
          <pre>YouTube    <i>HandCraft.youtube.com</i></pre>
        </li>
      </ul>
    </div>
  </div>

  <div className="text-center mt-10">
    <p>&copy; 2023 HandCraft. All rights reserved.</p>
  </div>
</div>

  );
};

export default Footer;
