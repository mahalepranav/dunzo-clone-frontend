import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Allstores from "./pages/Allstores";
import Allrestaurants from "./pages/Allrestaurants";
import Allfruits from "./pages/Allfruits";
import Allmeats from "./pages/Allmeats";
import Allpets from "./pages/Allpets";
import Allgifts from "./pages/Allgifts";
import LoginEmail from "./components/sign-up/LoginEmail";
import RegisterNew from "./components/sign-up/RegisterNew";
import Allpartners from "./pages/Allpartners";
import Groceries from "./pages/Groceries";
import Vegefruits from "./pages/Vegefruits";
import Meats from "./pages/Meats";
import Pets from "./pages/Pets";
import Gifts from "./pages/Gifts";
import Restaurants from "./pages/Restaurants";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allstores" element={<Allstores />} />
        <Route path="/allrestaurants" element={<Allrestaurants />} />
        <Route path="/allfruits" element={<Allfruits/>} />
        <Route path="/allmeats" element={<Allmeats/>}/>
        <Route path="/allpets" element={<Allpets/>}/>
        <Route path="/allgifts" element={<Allgifts/>}/>
        <Route path="/signup" element={<LoginEmail/>}/>
        <Route path="/register" element={<RegisterNew/>}/>
        <Route path="/allpartners" element={<Allpartners/>}/>
        <Route path="/groceries" element={<Groceries />}/>
        <Route path="/vegefruits" element={<Vegefruits />}/>
        <Route path="/meats" element={<Meats />}/>
        <Route path="/pets" element={<Pets />}/>
        <Route path="/gifts" element={<Gifts />}/>
        <Route path="/restaurants" element={<Restaurants />}/>

      </Routes>
    </Router>
  );
};

export default App;
