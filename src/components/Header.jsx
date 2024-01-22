import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
const Header = ({ handleThemeSwitch }) => {
  return (
    <div className="flex justify-between dark:bg-DarkBlue dark:text-white bg-VeryLightGray text-VeryDarkBlue  px-6  py-6 md:px-20">
      <h1 className="lg:text-[30px] md:text-[25px] text-[20px] font-bold">
        Where in the world?
      </h1>
      
      <button onClick={handleThemeSwitch}>
        <BsFillMoonFill className="inline-block " />
        Dark Mode
      </button>
    </div>
  );
};

export default Header;
