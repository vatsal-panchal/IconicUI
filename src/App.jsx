import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Icon from "./pages/icons/Icon";
import NotFound from "./pages/Notfound/Notfound";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen capitalize">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icons" element={<Icon />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default App;