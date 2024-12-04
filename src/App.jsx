import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import { CartProvider } from "./context/CartContext";
import HouseKeeping from "./components/HouseKeeping";
import ToiletryProducts from "./components/housekeeping/ToiletryProducts";
import CleaningProducts from "./components/housekeeping/CleaningProducts";
import Dustbins from "./components/housekeeping/Dustbins";
import Disposables from "./components/housekeeping/Disposables";
import OfficeStationery from "./components/OfficeStationery";
import PhotoCopierPaper from "./components/OfficeStationery/PhotoCopierPaper";
import WritingInstrument from "./components/OfficeStationery/WritingInstrument";
import DeskAccessories from "./components/OfficeStationery/DeskAccessories";
import FileFolder from "./components/OfficeStationery/FileFolder";
import RegisterWritingPad from "./components/OfficeStationery/RegisterWritingPad";
import SchoolStationery from "./components/OfficeStationery/SchoolStationery";
import './index.css'; 


const App = () => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartProvider>
    <Router>
      <div className="app">
        <Navbar />
        <div className="content flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/housekeeping" element={<HouseKeeping />} />
            <Route path="/housekeeping/toiletry-products" element={<ToiletryProducts />} />
            <Route path="/housekeeping/cleaning-products" element={<CleaningProducts />} />
            <Route path="/housekeeping/dustbins" element={<Dustbins />} />
            <Route path="/housekeeping/disposables" element={<Disposables />} />

            <Route path="/office-stationery" element={<OfficeStationery />} />
            <Route path="/office-stationery/photo-copier-paper" element={<PhotoCopierPaper />} />
            <Route path="/office-stationery/writing-instrument" element={<WritingInstrument />} />
            <Route path="/office-stationery/desk-accessories" element={<DeskAccessories />} />
            <Route path="/office-stationery/file-folder" element={<FileFolder />} />
            <Route path="/office-stationery/register-writing-pad" element={<RegisterWritingPad />} />
            <Route path="/office-stationery/school-stationery" element={<SchoolStationery />} />
          </Routes>
        </div>
        <Footer /> {/* Add the footer */}
      </div>
    </Router>
    </CartProvider>
  );
};

export default App;



