import React,{useEffect, useState} from "react";
import {Form, Input, Button} from "antd";
import Seoul from "../Image/seoul_logo.png";
import Gyeonggi from "../Image/gyeonggi_logo.png";
import Incheon from "../Image/incheon_logo.jpg";
import Gangwon from "../Image/Gangwon_logo.png";
import KakaoMapApi from "./Sections/KakaoMapApi";
import './Sections/LandingPage.css';
import SliderItem from "./Sections/SliderItem";
import SwiperContainer from "./Sections/SwiperContainer";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styled from "styled-components";

function movetoSeoul(){
    window.location.href = "/seoul";
}

function movetoIncheon(){
    window.location.href = "/incheon";
}

function movetoDaejeon(){
    window.location.href = "/daejeon";
}

function movetoGwangju(){
    window.location.href = "/gwangju";
}

function movetoDaegu(){
    window.location.href = "/daegu";
}

function movetoUlsan(){
    window.location.href = "/ulsan";
}

function movetoBusan(){
    window.location.href = "/busan";
}

function movetoJeju(){
    window.location.href = "/jeju";
}

function movetoGyeonggi(){
    window.location.href = "/gyeonggi";
}

function movetoGangwon(){
    window.location.href = "/gangwon";
}

function movetoChoongChung(){
    window.location.href = "/choongchung";
}

function movetoJeonRa(){
    window.location.href = "/jeonra";
}

function movetoGyeongSang(){
    window.location.href = "/gyeongsang";
}

function LandingPage(){
    const [Inputtext, setInputText] = useState('');
    const [Place, setPlace] = useState('');

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(Inputtext);
        setInputText('');
    }

    const StyledSwiperContainer = styled.div`
    /*width: 100%;
    height: 100%;*/ 
    background: linear-gradient(
      270deg,
      rgba(247, 249, 255, 1) 0%,
      rgba(242, 246, 255, 1) 100%
    );
    position: relative;
    max-width: 420px;
    max-height: 520px;
    border-radius: 10px;
  `;
  const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
`;
    return(
        <div>

            <div className="init">
                    
                <form className ="inputForm" onSubmit={handleSubmit}>
                    <table>
                        <td><h3>장소검색: &nbsp;</h3></td>
                        <td><input style={{width:"300px"}} onChange={onChange} value={Inputtext} placeholder="검색어를 입력하세요"/>
                <button type="submit">검색</button></td>
                    </table>
                
                </form>
            
                
            </div>
            <br />
            <table>
                <tr>
                    <td><KakaoMapApi searchPlace={Place}/></td>
                    <td>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xRbPAVnqtcs?loop=1&playlist=xRbPAVnqtcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </td>
                </tr>
            </table>
            <br/>
            <br/>
            <div>
            <h3>드래그 하여 지역으로 이동하기</h3>
            <StyledSwiperContainer>
                <StyledSwiper>
                <SwiperSlide>Seoul &nbsp; <Button onClick={movetoSeoul}>이동</Button></SwiperSlide>
                <SwiperSlide>Incheon &nbsp; <Button onClick={movetoIncheon}>이동</Button></SwiperSlide>
                <SwiperSlide>Gyeonggi &nbsp; <Button onClick={movetoGyeonggi}>이동</Button></SwiperSlide>
                <SwiperSlide>Gangwon &nbsp; <Button onClick={movetoGangwon}>이동</Button></SwiperSlide> 
                <SwiperSlide>ChoongChung &nbsp; <Button onClick={movetoChoongChung}>이동</Button></SwiperSlide>
                <SwiperSlide>Daejeon &nbsp; <Button onClick={movetoDaejeon}>이동</Button></SwiperSlide>
                <SwiperSlide>JeonRa &nbsp; <Button onClick={movetoJeonRa}>이동</Button></SwiperSlide>
                <SwiperSlide>Gwangju &nbsp; <Button onClick={movetoGwangju}>이동</Button></SwiperSlide>
                <SwiperSlide>GyeongSang &nbsp; <Button onClick={movetoGyeongSang}>이동</Button></SwiperSlide>
                <SwiperSlide>Daegu &nbsp; <Button onClick={movetoDaegu}>이동</Button></SwiperSlide>
                <SwiperSlide>Ulsan &nbsp; <Button onClick={movetoUlsan}>이동</Button></SwiperSlide>
                <SwiperSlide>Busan &nbsp; <Button onClick={movetoBusan}>이동</Button></SwiperSlide>
                <SwiperSlide>Jeju &nbsp; <Button onClick ={movetoJeju}>이동</Button></SwiperSlide>          
                </StyledSwiper>
            </StyledSwiperContainer>
          
            </div>
            <br />
            <br />
            <br />

            <div>
                <h4>길을 모르겠을땐?</h4>
                <a href="/navi">use navigation</a>
            </div>

        </div>
    )
}

export default LandingPage;