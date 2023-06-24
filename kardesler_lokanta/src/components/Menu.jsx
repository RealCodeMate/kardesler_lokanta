import React from "react";
import styles from "../style";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/custom-accordion.css";

const Menu = () => {
  return (
    <div>
      <div>
        <h2 className={`${styles.heading2} text-center mt-10 mb-10`}>
          Menüler
        </h2>
      </div>
      <Accordion className="custom-accordion" defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Tavuk Dönerler</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row className="grid-layout">
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 ">
                    <h2
                      className={`${styles.heading2} text-xs text-center xs:text-sm`}
                    >
                      Pilav Üstü Tavuk Döner
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/8.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xs text-center xs:text-sm`}
                    >
                      Dürüm Tavuk Döner
                    </h2>
                    <img
                      src={
                        "https://raw.githubusercontent.com/RealCodeMate/kardesler_lokanta/main/kardesler_lokanta/src/assets/menus/2.png"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xs text-center xs:text-sm`}
                    >
                      Kaşarlı Tavuk Döner
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/25.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex ">
                    <h2
                      className={`${styles.heading2} text-xs text-center xs:text-sm`}
                    >
                      Tavuk Döner
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/10.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Et Dönerler</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row className="grid-layout">
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      İskender
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/4.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center  xs:text-sm`}
                    >
                      Pilav Üstü Et Döner
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/7.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3  "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Dürüm Et Döner
                    </h2>
                    <img
                      src={
                        "https://raw.githubusercontent.com/RealCodeMate/kardesler_lokanta/main/kardesler_lokanta/src/assets/menus/1.png"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Yarım Ekmek Et Döner
                    </h2>
                    <img
                      src={
                        "https://raw.githubusercontent.com/RealCodeMate/kardesler_lokanta/main/kardesler_lokanta/src/assets/menus/3.png"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Ana Yemekler</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row className="grid-layout">
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Saç Tava
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/23.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Yozgat Tas Kebabı
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/27.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Etli Güveç
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/12.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Kuru Fasulye
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/16.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Fırında Tavuk But
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/24.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Izgara Köfte
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/11.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Bursa İnegöl Köfte
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/26.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Çorbalar</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row className="grid-layout">
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Ezogelin Çorbası
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/13.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Mercimek Çorbası
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/18.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Tavuksuyu Çorbası
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/14.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Yan Lezzetler</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row className="grid-layout">
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Pirinç Pilavı
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/19.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Bulgur Pilavı
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/28.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Patates Kızartması
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/29.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Çoban Salata
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/30.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Tostlar</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row className="grid-layout">
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Kavurmalı Kaşarlı Tost
                    </h2>

                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/6.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Sucuklu Kaşarlı Tost
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/15.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Kaşarlı Tost
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/31.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Karışık Tost
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/32.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Kahvaltılıklar</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row className="grid-layout">
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Menemen
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/33.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Sahanda Yumurta
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/34.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Patso
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/22.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Sandviç
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/35.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Tatlılar</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row className="grid-layout">
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Burma Kadayıf
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/21.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Baklava
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/36.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
                <Col>
                  <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col">
                    <h2
                      className={`${styles.heading2} text-xl text-center xs:text-sm`}
                    >
                      Sütlaç
                    </h2>
                    <img
                      src={
                        "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/menus/20.png?raw=true"
                      }
                      alt="fire"
                      className="w-[10rem] h-[10rem] mx-auto mt-7 mb-7 cursor-pointer transition duration-[2800ms] ease-in-out hover:-rotate-180 z-10 xs:mt-0 xs:mb-3 "
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div id="menü" className=" grid grid-cols-5 xs:grid-cols-2"></div>
    </div>
  );
};

export default Menu;
