import React, { useState } from "react";
import styles from "../style";
import { chef, fire, robot2 } from "../assets";
import GetStarted from "./GetStarted";
import "../css/hero.css";

const Hero = () => {
  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    let gr = document.getElementById("gr1");
    let gr2 = document.getElementById("gr2");
    gr.style.top = value * 1 + "px";
    gr.style.right = value * 1 + "px";
    gr2.style.top = value * 0.5 + "px";
    gr2.style.right = value * 0.5 + "px";
  });

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
          <div className="parent">
            <div className="slider">
              <button type="button" id="right" className="right" name="button">
                <svg
                  version="1.1"
                  id="Capa_1"
                  width="40px"
                  height="40px "
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 477.175 477.175"
                  style={{ enableBackground: "new 0 0 477.175 477.175" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      style={{ fill: "#9d9d9d" }}
                      d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
    c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
    "
                    />
                  </g>
                </svg>
              </button>
              <button type="button" id="left" className="left" name="button">
                <svg
                  version="1.1"
                  id="Capa_2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 477.175 477.175"
                  style={{ enableBackground: "new 0 0 477.175 477.175" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      style={{ fill: "#9d9d9d" }}
                      d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
    c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                    />
                  </g>
                </svg>
              </button>
              <svg
                id="svg2"
                className="up2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <circle
                  id="circle1"
                  className="circle1 steap"
                  cx="34px"
                  cy="49%"
                  r={20}
                />
                <circle
                  id="circle2"
                  className="circle2 steap"
                  cx="34px"
                  cy="49%"
                  r={100}
                />
                <circle
                  id="circle3"
                  className="circle3 steap"
                  cx="34px"
                  cy="49%"
                  r={180}
                />
                <circle
                  id="circle4"
                  className="circle4 steap"
                  cx="34px"
                  cy="49%"
                  r={260}
                />
                <circle
                  id="circle5"
                  className="circle5 steap"
                  cx="34px"
                  cy="49%"
                  r={340}
                />
                <circle
                  id="circle6"
                  className="circle6 steap"
                  cx="34px"
                  cy="49%"
                  r={420}
                />
                <circle
                  id="circle7"
                  className="circle7 steap"
                  cx="34px"
                  cy="49%"
                  r={500}
                />
                <circle
                  id="circle8"
                  className="circle8 steap"
                  cx="34px"
                  cy="49%"
                  r={580}
                />
                <circle
                  id="circle9"
                  className="circle9 steap"
                  cx="34px"
                  cy="49%"
                  r={660}
                />
              </svg>
              <svg
                id="svg1"
                className="up2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <circle
                  id="circle10"
                  className="circle10 steap"
                  cx="648px"
                  cy="49%"
                  r={20}
                />
                <circle
                  id="circle11"
                  className="circle11 steap"
                  cx="648px"
                  cy="49%"
                  r={100}
                />
                <circle
                  id="circle12"
                  className="circle12 steap"
                  cx="648px"
                  cy="49%"
                  r={180}
                />
                <circle
                  id="circle13"
                  className="circle13 steap"
                  cx="648px"
                  cy="49%"
                  r={260}
                />
                <circle
                  id="circle14"
                  className="circle14 steap"
                  cx="648px"
                  cy="49%"
                  r={340}
                />
                <circle
                  id="circle15"
                  className="circle15 steap"
                  cx="648px"
                  cy="49%"
                  r={420}
                />
                <circle
                  id="circle16"
                  className="circle16 steap"
                  cx="648px"
                  cy="49%"
                  r={500}
                />
                <circle
                  id="circle17"
                  className="circle17 steap"
                  cx="648px"
                  cy="49%"
                  r={580}
                />
                <circle
                  id="circle18"
                  className="circle18 steap"
                  cx="648px"
                  cy="49%"
                  r={660}
                />
              </svg>
              <div id="slide1" className="slide1 up1">
                MOUNTAIN
              </div>
              <div id="slide2" className="slide2">
                BEACH
              </div>
              <div id="slide3" className="slide3">
                FOREST
              </div>
              <div id="slide4" className="slide4">
                DESERT
              </div>
            </div>
          </div>

          <div
            id="gr1"
            className="absolute z-[0] w-[20%] h-[35%] top-0 pink__gradient"
          />

          <div
            id="gr2"
            className="absolute z-[0] w-[80%] h-[70%] right-5 bottom-20 red__gradient"
          />
        </div>
        <div className={`ss:hidden ${styles.flexCenter} -mt-10`}>
          <GetStarted />
        </div>
      </section>
    </div>
  );
};

export default Hero;
