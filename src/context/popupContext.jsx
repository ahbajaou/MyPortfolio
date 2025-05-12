import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => setIsOpen(true);

  // Function to close the popup
  const closePopup = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

// Custom hook to use the popup context
export const usePopup = () => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};

export const PopupWrapper = ({ children }) => {
  return (
    <PopupProvider>
      {children}
    </PopupProvider>
  );
};

export default PopupWrapper;