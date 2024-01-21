import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import CountryDetail from "./pages/CountryDetail"
function App() {
  return (
    <div className="bg-gray-200 min-h-[100vh]">
      <Header />
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
