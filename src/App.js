import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import { ThemeProvider } from "next-themes";

function App() {
  // get localstorage theme

  // if theme is set to dark, set the body class to dark

  return (
    <ThemeProvider>
      <Router>
        <div className="max-w-6xl space-y-24 mx-auto p-5 ">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
        </div>{" "}
      </Router>
      <div className="mt-14">
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
