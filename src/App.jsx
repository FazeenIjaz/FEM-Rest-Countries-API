import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import CountryDetail from "./pages/CountryDetail"
function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="dark:bg-VeryDarkerBlue bg-gray-200 min-h-[100vh]">
      <Header handleThemeSwitch={handleThemeSwitch} />
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/detail/:name" element={<CountryDetail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
