import './App.css';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUS";
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;