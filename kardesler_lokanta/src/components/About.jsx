import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import { fire } from "../assets";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-white`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Tarihi kebap lezzeti için
          <br className="sm:block hidden" /> bizi tercih edin.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Kebap tutkunlarının vazgeçilmez adresi olan restoranımızda, tarihi
          kebap lezzetini keşfedin. Usta aşçımızın maharetli ellerinden çıkan,
          taze ve seçkin malzemelerle hazırlanan kebaplarımız, damaklarda
          unutulmaz bir tat bırakıyor.
        </p>
      </div>
      <div className="absolute z-3 -left-1/2 top-50 w-[10%] h-[10%] rounded-full white__gradient" />
      <div className="absolute z-0 -left-1/2 top-50 w-[60%] h-[100%] rounded-full red__gradient" />

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;
