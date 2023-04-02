import React from "react";
import styles from "./style";

import About from "./components/About";
import Button from "./components/Button";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menus from "./components/menus";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

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
          <About /> <Menus /> <Testimonials /> <Contact /> <Footer />
        </div>
      </div>
    </div>
  );
};
