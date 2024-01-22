import React, { useState } from "react";
import { useSearch } from "../context/useSearch";

const searchInput = () => {
  const { setSearchQuery } = useSearch();
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter Country .... "
        value={value}
        onChange={handleChange}
        className="p-[10px] rounded-md sm:w-[370px] w-[250px] dark:bg-DarkBlue dark:text-white  bg-VeryLightGray placeholder-DarkGray"
      />
    </form>
  );
};

export default searchInput;
