import React from "react";
import "../css/content.css";
import styles, { layout } from "../style";

const Comment = () => {
  const cardData = [
    {
      title: "Haci Tan",
      content:
        "Otogar da bulabileceğiniz en nezih yerlerin başında geliyor. Çok ilgili ve saygın bir yer. Titiz olmaları da 5 yıldızı hak ediyor dedirtiyor...",
      image:
        "https://lh3.googleusercontent.com/a-/ACB-R5QKPP5E-5uFb_RTWhJdDohJNofgygABGGNb5RXCmMs=w60-h60-p-rp-mo-br100",
    },
    {
      title: "Deniz the Adventures",
      content:
        "When you get off at the bus station, exit B is the second restaurant on the left. You should definitely eat liver here, it is very well cooked, soft and delicious. For the specially made lentil soup.",
      image:
        "https://lh3.googleusercontent.com/a-/ACB-R5Rq0-LThrHkzyOupwxkM-L8YtF1MNILLIs2-cJpBg=w60-h60-p-rp-mo-ba3-br100",
    },
    {
      title: "Veysi Onat",
      content:
        "Yediğim en güzel menü,güveç,iskender,taş kebab,elinize sağlık,çok guzeldi",
      image:
        "https://lh3.googleusercontent.com/a-/ACB-R5R3BkoRcS-gONxRcn5OFdroCS-QKBCqr-VD1M__tA=w60-h60-p-rp-mo-br100",
    },
  ];
  return (
    <div>
      <h2 className={`${styles.heading2} text-center mt-10 mb-10`}>Yorumlar</h2>
      <div className="container cursor-pointer">
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="font-poppins">{cardData[0].title}</h2>
            <p className="font-poppins">{cardData[0].content}</p>
            <img src={cardData[0].image} alt="" />
          </div>
        </div>
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="font-poppins">{cardData[1].title}</h2>
            <p className="font-poppins">{cardData[1].content}</p>
            <img src={cardData[1].image} alt="" />
          </div>
        </div>
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="font-poppins">{cardData[2].title}</h2>
            <p className="font-poppins">{cardData[2].content}</p>
            <img src={cardData[2].image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

{
  /* <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            Otogar da bulabileceğiniz en nezih yerlerin başında geliyor. Çok
            ilgili ve saygın bir yer. Titiz olmaları da 5 yıldızı hak ediyor
            dedirtiyor...
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            Haci Tan
          </Typography>
          <Avatar
            size="xl"
            variant="circular"
            className="m-auto h-[100px] w-[100px] bg-center bg-cover duration-500 "
            style={{ backgroundImage: `url(${slides[1].url})` }}
          />
        </CardBody>
      </Card> */
}
