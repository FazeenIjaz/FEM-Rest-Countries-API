import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useFilter } from "../context/useFilter";

const filterRegion = () => {
  const [showRegions, setShowRegions] = useState(false);
  const { filterValue, setFilterValue } = useFilter();
  const handleFilter = (region) => {
    setFilterValue(region);
    console.log(filterValue);
  };
  return (
    <div className="flex flex-col items-center gap-3 dark:bg-DarkBlue dark:text-white  bg-VeryLightGray">
      <button
        className="flex justify-between gap-2  p-[10px] rounded-sm items-center"
        onClick={() => setShowRegions(!showRegions)}
      >
        <span className="">Filter by region</span>
        {showRegions ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {showRegions && (
        <div className=" dark:bg-DarkBlue dark:text-white  bg-VeryLightGray p-[5px] pl-[10px] text-[16px] shadow-xl rounded-sm w-[180px] fixed md:top-[27%]  top-[42%] md:right-[10px] sm:right-[38%] xs:right-[30%]">
          <ul
            className="flex flex-col gap-1"
            onClick={() => setShowRegions(!showRegions)}
          >
            <li className="cursor-pointer" onClick={() => handleFilter("Asia")}>
              Asia
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleFilter("Africa")}
            >
              Africa
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleFilter("America")}
            >
              America
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleFilter("Europe")}
            >
              Europe
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleFilter("Oceania")}
            >
              Oceania
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default filterRegion;
