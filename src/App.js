import React from "react";
import Hero from "./pages/hero";
import Work from "./pages/workshop";
import FAQ from "./pages/faq";
import AboutPyHack from "./pages/py";
import Footer from "./pages/footer";
function App() {
  return (
    <div className="font-Inter">
      <Hero />
      <Work />
      <AboutPyHack />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
