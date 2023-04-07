import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";

const MissionVision = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Misyon</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima
          deserunt harum dolores quod quis!
        </p>
        <h2 className={styles.heading2}>Vizyon</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima
          deserunt harum dolores quod quis!
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default MissionVision;
