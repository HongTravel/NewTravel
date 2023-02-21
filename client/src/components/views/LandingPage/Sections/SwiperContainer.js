import React,{useState,useEffect,useRef} from "react";
import Seoul from "../../Image/seoul_logo.png";
import Gyeonggi from "../../Image/gyeonggi_logo.png";
import Incheon from "../../Image/incheon_logo.jpg";
import Gangwon from "../../Image/Gangwon_logo.png";

import SwipeCore, {Navigation} from "swiper";
import "swiper/css/navigation";
import styled from "styled-components";
import SliderItem from "./SliderItem";
import {Swiper, SwiperSlide} from "swiper/react";

function SwiperContainer(){

    SwipeCore.use([Navigation]);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [swiperSetting, setSwiperSetting] = useState(null);

    useEffect(() => {
        if (!swiperSetting) {
          const settings = {
            navigation: {
              prevEl: prevRef.current, 
              nextEl: nextRef.current 
            },
            onBeforeInit: (swiper) => {
              // 초기설정
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          };
          setSwiperSetting(settings);
        }
      }, [swiperSetting]);

const StyledNavigations = styled.div`
position: absolute;
display: flex;
top: 55%;
justify-content: flex-end;
width: 100%;
padding-top: 8px;

> button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: #fff;
  position: relative;
  margin-left: 4px;


  &:before {
    content: "";
    position: absolute;
    background-color: #fff;
    height: 1px;
    width: 0;
    left: 0;
    /* top: 50%;
    transform: translatey(-50%); */
    bottom: -1px;
    transition: 0.2s;
  }

  &:hover:before {
    width: 100%;
  }
  
  @media screen and (max-width: 520px) {
    &:hover:before,
    &:hover:before {
      display: none;
    }
  }
  ::after {
    display: none;
  }
 }
 `;
    const items =[
        {
            title: "Seoul",
            src : {Seoul}
        },
        {
            title: "Gyeonggi",
            src: {Gyeonggi}
        },
        {
            title: "Incheon",
            src: {Incheon}
        },
        {
            title: "Gangwon",
            src: {Gangwon}
        },
        {
           title: "ChoongChung",
           src: {Seoul}
        },
        {
          title: "Daejeon",
          src:{Seoul}
        },
        {
          title: "JeonRa",
          src: {Seoul}
        },
        {
          title: "Gwangju",
          src: {Seoul}
        },
        {
          title: "GyeongSang",
          src: {Seoul}
        },
        {
          title: "Daegu",
          src: {Seoul}
        },
        {
          title: "Ulsan",
          src: {Seoul},
        },
        {
          title: "Busan",
          src: {Seoul}
        },
        {
          title: "Jeju",
          src: {Seoul}
        }
    ];


        items.map((item,idx)=>{
            return(
                <SwiperSlide key = {idx}>
                    <SliderItem title = {item.title} src={item.src} />
                </SwiperSlide>
            )
        })

        return(
            <StyledNavigations>
                <button ClassName = "swiper-button-prev" ref={prevRef}>
                    Prev
                </button>
                <button ClassName = "swiper-button-prev" ref={nextRef}>
                    Next
                </button>
            </StyledNavigations>
        )

}

export default SwiperContainer;