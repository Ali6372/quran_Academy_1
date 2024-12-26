// import React, { useState } from "react";
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home/Home";
// import About from "./components/About/About";
// import Services from "./components/Service/Services";
// import Footer from "./components/Footer/Footer";
// import QuranPrograms from "./components/Programs/QuranPrograms";
// import Contact from "./components/contact/Contact";
// import Header from "./components/header/Header";
// import WebSidebar from "./components/webSidebar/WebSidebar";

// function App() {
//   const [open, setOpen] = useState(false); // Declare the open state for sidebar

//   return (
//     <Router>
//       <Header open={open} setOpen={setOpen} /> {/* Pass open and setOpen to Header */}
//       <WebSidebar open={open} setOpen={setOpen} /> {/* Optionally pass to WebSidebar if needed */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Services />} />
//         <Route path="/program" element={<QuranPrograms />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./components/About/About";
import Services from "./components/Service/Services";
import Footer from "./components/Footer/Footer";
import WebSidebar from "./components/webSidebar/WebSidebar";
import Header from "./components/header/Header";
import QuranPrograms from "./components/Programs/QuranPrograms";
import Contact from "./components/contact/Contact";
import'./App.css';
import './ScrollAnimationWrapper';

function App() {
  const [open, setOpen] = useState(false); // Sidebar state

  return (
    <Router>
      <Header open={open} setOpen={setOpen} />
      <WebSidebar open={open} setOpen={setOpen} /> {/* Pass open and setOpen */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/program" element={<QuranPrograms/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

