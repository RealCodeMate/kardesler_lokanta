import React from "react";
import styles from "./style";

import About from "./components/About";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import AboutSecond from "./components/AboutSecond";
import MissionVision from "./components/MissionVision";
import Trendyol from "./components/Trendyol";
import Comment from "./components/Comment";
import Gallery from "./components/Gallery";

export const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <About />
          <AboutSecond />
          <MissionVision />
          <Comment />
          <Menu />
          <Gallery />
          <Contact />
          <Footer />
          <Trendyol />
        </div>
      </div>
    </div>
  );
};
