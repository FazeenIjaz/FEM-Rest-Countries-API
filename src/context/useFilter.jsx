import { createContext, useContext, useState } from "react";

const filterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <filterContext.Provider value={{ filterValue, setFilterValue }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(filterContext);
};
