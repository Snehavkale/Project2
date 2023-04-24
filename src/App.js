import React from "react";
import "./style/App.scss";
import {  BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./style/mediaquery.scss";


function App() {
  return (
    <div >
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
