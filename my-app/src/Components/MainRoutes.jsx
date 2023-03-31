import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { Men } from "../pages/Men";
import { Women } from "../pages/Women";
import Singlecardwomen from "./Singlecard";
import Singlecardmen from "./Singlecardmen";

function MainRoutes() {



  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men/:id" element={<Singlecardmen />} />
      <Route path="/women/:id" element={<Singlecardwomen/>}/>
    </Routes>
  );
}

export default MainRoutes;
