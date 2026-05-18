import { useState } from "react";
import { useScrollY, useHeroLoad } from "./hooks/usePortfolio";

import "./styles/globals.css";

import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import About       from "./components/About";
import Stats       from "./components/Stats";
import PhotoGallery from "./components/PhotoGallery";
import PhotoModal  from "./components/PhotoModal";
import Skills      from "./components/Skills";
import Collabs     from "./components/Collabs";
import Works       from "./components/Works";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";

function App() {
  const scrollY    = useScrollY();
  const heroLoaded = useHeroLoad(200);

  const [activePhoto, setActivePhoto] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#0a0a0a", color: "#f5f0eb", overflowX: "hidden" }}>
      <Navbar scrollY={scrollY} onScrollTo={scrollTo} />
      <Hero   scrollY={scrollY} heroLoaded={heroLoaded} onScrollTo={scrollTo} />
      <About />
      <Stats />
      <PhotoGallery onPhotoClick={setActivePhoto} />
      <Skills />
      <Collabs />
      <Works />
      <Contact />
      <Footer />
      <PhotoModal photo={activePhoto} onClose={() => setActivePhoto(null)} />
    </div>
  );
}

export default App;
