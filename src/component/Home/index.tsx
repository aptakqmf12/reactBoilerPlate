import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./style.scss";
import axios from "axios";

const Home = () => {
  const getTranslatedText = async (text: string) => {
    const res = await axios.post(`/api/v1/automation/translate`, { text });
    console.log(res);
  };
  getTranslatedText("스트링");
  const data = ["바나나", "키위", "토마토", "사과"];

  return (
    <ul>
      {/* {data.map((data) => {
        return <li>{getTranslatedText(data)}</li>; // 번역된 과일이름들이 나오게 하고싶습니다
      })} */}
    </ul>
  );
};

export default Home;
