import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from "./components/Products";
import { ThemeProvider } from "next-themes";
function App() {
  return (
    <>
      <ThemeProvider>
        <div className="max-w-6xl mx-auto p-4 space-y-24">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Products" element={<Products />} />
            </Routes>
          </Router>
        </div>
        <div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
