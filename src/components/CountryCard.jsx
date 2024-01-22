import React from "react";
import { useNavigate } from "react-router-dom";
const CountryCard = ({ data }) => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/detail/${data.name.common}`);
  };
  return (
    <div className="mx-auto">
      <div
        className="rounded-lg cursor-pointer transition-all ease-in-out duration-300 hover:scale-105 md:w-64  dark:text-white bg-VeryLightGray text-VeryDarkBlue dark:bg-DarkBlue shadow-md hover:shadow-2xl"
        onClick={navigateToDetail}
      >
        <div className="">
          <img
            src={data.flags.png}
            alt={data.flags.alt}
            className="rounded-t-lg"
          />
        </div>
        <div className=" px-7 py-9 flex flex-col gap-2">
          <h3 className="text-lg font-bold">{data.name.common}</h3>
          <p>
            <span className="font-semibold">Population : </span>{" "}
            {data.population}
          </p>
          <p>
            <span className="font-semibold">Region : </span> {data.region}
          </p>
          <p>
            <span className="font-semibold">Capital : </span> {data.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
