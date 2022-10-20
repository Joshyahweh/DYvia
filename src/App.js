import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import AllInOne from "./Components/AllInOne";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Support from "./Components/Support";

function App() {
  const [nav, setNav] = useState(false);

  const handleToggle = () => setNav((prevNav) => !prevNav);
  const handleClose = () => setNav(!nav);

  return (
    <div>
      <Navbar toggle={handleToggle} nav={nav} close={handleClose} />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
