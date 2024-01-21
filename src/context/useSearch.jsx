import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(" ");

  return (
    <searchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(searchContext);
};
