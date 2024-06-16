import React, { useState, useEffect } from "react";
import '../styles/homediv4.css';
import axios from "axios";

// const serviceSubType = process.env.REACT_APP_SERVICESUBTYPE_API;
function ServiceCards(props) {
  const [ServiceIds, setServiceIds] = useState([]);
  const [imageLinks, setImageLinks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1030/servicesSubtype")
      .then(response => {
        const serviceSubtypes = response.data.find(item => item[props.serviceName]);
  
        if (serviceSubtypes) {
          const serviceTypes = serviceSubtypes[props.serviceName];
          const ids = serviceTypes.map(service => service.id);
          setServiceIds(ids);
  
          // Fetch random images
          const fetchImages = ids.map(() =>
            axios.get('https://picsum.photos/200/300', { responseType: 'blob' })
          );
  
          Promise.all(fetchImages)
            .then(responses => {
              const urls = responses.map(response => URL.createObjectURL(response.data));
              setImageLinks(urls);
            })
            .catch(error => {
              console.error('Error fetching images:', error);
            });
        }
      })
      .catch(error => {
        if (error.response) {
          console.error('Response error:', error.response.status, error.response.data);
        } else if (error.request) {
          console.error('Request error:', error.request);
        } else {
          console.error('Error:', error.message);
        }
      });
  }, [props.serviceName]);
  

  return (
    <div className="flex flex-row overflow-x-auto border-2 card-container mt-4 rounded-xl bg-customBackground-100 scrollbar-hide">
      <div className="animate-scroll flex">
        {ServiceIds.map((id, index) => (
          <div className="company-card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-indigo-500/40 duration-300 m-2" key={id}>
            <div className="flipCard">
              <div className="flip-card-front flex flex-col items-center" style={{ minWidth: "120px", maxWidth: "200px" }}>
                <div className="h-32 w-32 object-cover rounded-lg shadow-lg mt-2">
                  <img src={imageLinks[index] || '#'} alt="Image" className="h-full w-full object-cover" />
                </div>
                <p className="text-center mt-1">{id}</p>
              </div>
              <div className="flip-card-back">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium blanditiis vel sequi? Quidem modi illum saepe cum aperiam laborum ex, soluta fugiat sed mollitia placeat id qui sunt nihil nesciunt?
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
