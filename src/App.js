import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Support from "./Components/Support";

function App() {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav((prevNav) => !prevNav);
  };
  return (
    <div>
      <Navbar toggle={handleToggle} nav={nav} />
      <Hero />
      <About />
      <Support />
    </div>
  );
}

export default App;
