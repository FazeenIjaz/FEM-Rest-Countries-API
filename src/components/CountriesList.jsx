import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearch } from "../context/useSearch";
import { useFilter } from "../context/useFilter";
import CountryCard from "./CountryCard";

const CountriesList = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { filterValue } = useFilter();
  const [countries, setCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    };

    fetchData();
    console.log(countries, "countries");
  }, []);

  useEffect(() => {
    const searchCountries = () => {
      let searchedCountry = countries.slice();

      if (searchQuery !== "") {
        searchedCountry = searchedCountry.filter((country) =>
          country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        );
        console.log(searchedCountry);
      }

      return searchedCountry;
    };
    // setSearchQuery("")
    setSearchedCountries(searchCountries());
  }, [searchQuery, countries]);

  useEffect(() => {
    const filterCountries = () => {
      let filteredCountry = countries.slice();

      if (filterValue !== "") {
        filteredCountry = filteredCountry.filter((country) =>
          country.region.includes(filterValue)
        );
      }

      return filteredCountry;
    };

    setSearchedCountries(filterCountries());
  }, [filterValue, countries]);

  return (
    <div className="flex flex-wrap gap-10 p-[20px] ml-[30px] items-center">
      {searchedCountries.length > 0
        ? searchedCountries.map((country) => (
            <CountryCard key={country.name.common} data={country} />
          ))
        : countries.map((country) => (
            <CountryCard key={country.name.common} data={country} />
          ))}
    </div>
  );
};

export default CountriesList;
