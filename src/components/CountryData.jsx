import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CountryData = ({ country }) => {
  const [borderCountries, setBorderCountries] = useState([]);
  const navigate = useNavigate();

  let nativeName =
    country.name.nativeName[Object.keys(country.name.nativeName)[0]];

  const currencies = country.currencies[Object.keys(country.currencies)[0]];

  let borderLink = "";
  if (country.borders) {
    borderLink = `https://restcountries.com/v3.1/alpha?codes=${country.borders}`;
  }

  useEffect(() => {
    const fetchBorderCountries = async () => {
      const response = await axios.get(borderLink);
      setBorderCountries(response.data);
    };
    if (country.borders) {
      fetchBorderCountries();
    }
  }, [country.borders]);

  const navigateToBorderCountry = (border) => {
    navigate(`/detail/${border.name.common}`);
    console.log(" navigating to : ", border.name.common);
  };

  return (
    <div className="flex flex-col justify-between gap-10 dark:text-white text-VeryDarkerBlue">
      <div className="flex items-center justify-center">
        <h2 className="text-[30px] font-bold">{country.name.common}</h2>
      </div>
      <div className="flex md:flex-row flex-col ">
        {/* img */}
        <div className="lg:w-[50%]">
          <img src={country.flags.png} alt="" className="w-[80%]" />
        </div>
        {/* right info */}
        <div className="flex flex-col gap-5 lg:w-[50%]">
          <div className="flex gap-10">
            {/* 1st section */}
            <ul className="flex gap-3 flex-col">
              <li className="">
                <span className="text-[19px] font-semibold">Native Name: </span>
                {nativeName.common}
                {/* {country.name.common} */}
              </li>
              <li className="">
                <span className="text-[19px] font-semibold">Population: </span>
                {country.population}
              </li>
              <li className="">
                <span className="text-[19px] font-semibold">Region: </span>
                {country.region}
              </li>
              <li className="">
                <span className="text-[19px] font-semibold">Sub-region: </span>
                {country.subregion}
              </li>
              <li className="">
                <span className="text-[19px] font-semibold">Capital: </span>
                {country.capital}
              </li>
            </ul>
            {/* 2nd section */}
            <ul className="flex gap-3 flex-col">
              <li className="">
                <span className="text-[19px] font-semibold">
                  Top Level Domain:{" "}
                </span>
                {country.tld[0]}
              </li>
              <li className="">
                <span className="text-[19px] font-semibold">Currencies: </span>
                {currencies.name}
              </li>
              <li className="">
                <span className="text-[19px] font-semibold">Languages: </span>
                <span>{Object.values(country.languages).join(", ")}</span>
              </li>
            </ul>
          </div>
          {country.borders && (
            <>
              <h3 className="text-[24px] font-semibold">Border Countries:</h3>
              <div className="cursor-pointer flex gap-2 p-[5px] flex-wrap">
                {borderCountries.map((border) => (
                  <span
                    className="bg-gray-200 dark:bg-DarkGray dark:text-DarkBlue block py-[6px] px-[8px] rounded-sm border dark:border-black  hover:border hover:border-black dark:hover:border-white"
                    key={border.cca3}
                    onClick={() => navigateToBorderCountry(border)}
                  >
                    {border.name.common}{" "}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryData;
