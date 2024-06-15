import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsSmallScreen]);



  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed h-full w-64 z-10 text-xl -mt-2 text-black  bg-nav-img2 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0 ${isSmallScreen ? 'visible' : 'invisible'}`}
      >
        <ul className="pt-6 space-y-2">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-blue-600">Home</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-blue-600">Product</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-blue-600">Contact</a>
          </li>
        </ul>
      </div>

      {/* Navbar */}
      <nav className="p-4 h-18 m-2 border-2 rounded-2xl text-xl bg-nav-img bg-cover">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl font-playwrite-fr-moderne">HandCrafts</div>
            {isSmallScreen ? (
              <a
                onClick={toggleSidebar}
                className=" hover:text-gray-900 p-0 rounded-md sm:hidden"
              >
                Menu
              </a>
            ) : (
              <ul className="hidden sm:flex space-x-4 font-roboto">
                <li>
                  <a href="#" className=" hover:font-size-[1.2em]">Home</a>
                </li>
                <li>
                  <a href="#" className=" hover:font-size-[1.2em]">Product</a>
                </li>
                <li>
                  <a href="#" className=" hover:font-size-[1.2em]">Contact</a>
                </li>
                <li>
                  {/* <button className="text-white hover:text-gray-300 p-1 rounded-xl border-2 bg-gray-600 h-10 w-24" to="/Login" >Login </button> */}
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
