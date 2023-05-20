import React from "react";
import styles, { layout } from "../style";
import { bill } from "../assets";

const AboutSecond = () => {
  return (
    <section id="hakkımızda" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-5" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} z-10`}>Hakkımızda</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 z-10`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quia
          provident aut magni ex rem voluptates perspiciatis suscipit
          temporibus, est, in minus fugiat consequuntur accusantium laborum
          soluta tempore modi veritatis fuga tempora sit beatae hic asperiores
          facilis? Iusto, culpa ducimus corporis animi dolorem omnis fugiat
          officia nemo praesentium iste modi!
        </p>
      </div>
    </section>
  );
};

export default AboutSecond;
