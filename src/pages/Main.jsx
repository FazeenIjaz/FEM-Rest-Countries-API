import React from "react";
import SearchInput from "../components/SearchInput";
import { SearchProvider } from "../context/useSearch";
import { FilterProvider } from "../context/useFilter";
import FilterRegion from "../components/FilterRegion";
import CountriesList from "../components/CountriesList";

const Main = () => {
  return (
    <SearchProvider>
      <FilterProvider>
       <div className="flex md:flex-row flex-col md:gap-0 gap-[30px] md:items-start items-center justify-between  p-[29px]">
       <SearchInput />
        <FilterRegion />
       </div>
       <CountriesList/>
      </FilterProvider>
    </SearchProvider>
  );
};

export default Main;
