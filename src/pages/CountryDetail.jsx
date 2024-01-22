import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import CountryData from "../components/CountryData";

const CountryDetail = () => {
  const [country, setCountry] = useState({});
  const navigate = useNavigate();
  const { name } = useParams();

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      setCountry(response.data);
    };
    fetchData();
  }, []);
  return (
    <div className="px-5 md:px-10 pt-8 min-h-screen dark:bg-VeryDarkerBlue dark:text-white bg-VeryLightGray text-VeryDarkBlue">
      <button
        className="px-8 py-8  flex  dark:text-white  text-VeryDarkBlue items-center gap-2 "
        onClick={goBack}
      >
        <IoArrowBackOutline />
        Back
      </button>
      {
        country.length > 0 ? (<CountryData country={country[0]} />) : ( 
        <div className="flex items-center justify-center">
            <p className="text-[20px]">Loading...</p>
        </div>
        )
      }
    </div>
  );
};

export default CountryDetail;
