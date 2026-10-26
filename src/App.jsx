import { Routes, Route } from "react-router";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Booking from "./components/pages/Booking";
import Departments from "./components/pages/Departments";
import Doctors from "./components/pages/Doctors";
import ContactUs from "./components/pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="booking" element={<Booking />} />
      <Route path="departments" element={<Departments />} />
      <Route path="doctors" element={<Doctors />} />
      <Route path="contact" element={<ContactUs />} />
    </Routes>
    <Footer />
    </>
    
  );
}