import React, { createContext, useContext, useState } from 'react';

// Create the context
const ContactContext = createContext();

// Hook to use the context
export const useContactContext = () => useContext(ContactContext);

// Provider component
export const ContactProvider = ({ children }) => {
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const toggleContactFormVisibility = () => {
    setContactFormVisible((prevVisible) => !prevVisible);
  };

  return (
    <ContactContext.Provider value={{ isContactFormVisible, toggleContactFormVisibility }}>
      {children}
    </ContactContext.Provider>
  );
};
