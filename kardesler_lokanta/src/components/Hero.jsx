import React from "react";
import styles from "../style";
import { chef, fire, robot2 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div>
      <section
        id="anasayfa"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6   `}
        >
          <div className="flex flex-row items-center py-[6px] px-10 bg-discount-gradient rounded-[10px] mb-2 cursor-pointer  ">
            <img src={chef} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2 cursor-pointer  `}>
              {" "}
              <span className="text-white">Nevzat</span> Ustanın {""}
              <span className="text-white">Yeri</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-5">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
              Kardeşler <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Et</span>
            </h1>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
            Lokantası.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
            Lezzetin ve sıcaklığın buluştuğu Kardeşler Et Lokantası'nda enfes et
            ziyafetinin keyfini çıkarın.
          </p>
          <div className="ss:flex hidden md:mr-4 mr-0 mt-10 ">
            <GetStarted />
          </div>
        </div>
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={fire}
            alt="billing"
            className="w-[30%] h-[350px] relative z-[5] animate-pulse rounded-full  "
          />
          <img
            src={robot2}
            alt="billing"
            className="w-[50%] h-[450px]  relative z-[5]    "
          />
          <img
            src={fire}
            alt="billing"
            className="w-[30%] h-[350px] relative z-[5] animate-pulse rounded-full "
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
          <div className="absolute z-[0] w-[80%] h-[70%] right-10 bottom-20 red__gradient" />
        </div>
        <div className={`ss:hidden ${styles.flexCenter} -mt-10`}>
          <GetStarted />
        </div>
      </section>
    </div>
  );
};

export default Hero;
