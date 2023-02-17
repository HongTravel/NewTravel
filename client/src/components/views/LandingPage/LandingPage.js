import React,{useEffect, useState} from "react";
import Seoul from "../Image/seoul_logo.png";
import Gyeonggi from "../Image/gyeonggi_logo.png";
import Incheon from "../Image/incheon_logo.jpg";
import Gangwon from "../Image/Gangwon_logo.png";
import ChoongChung from "../Image/ChoongChung_logo.png";
const {kakao} = window;

const Maping = () => {
    

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {center: new kakao.maps.LatLng(37.552635722509,126.92436042413)
        ,
        level: 3};
        const kakaoMap = new kakao.maps.Map(container, options);
        
        const markerPosition = new kakao.maps.LatLng(37.552635722509,126.92436042413);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(kakaoMap);

        var iwContent = '<div style="padding: 5px;">안녕하세요!</div>'
        var iwPosition = new kakao.maps.LatLng(37.552635722509,126.92436042413);

        var infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent,
        });

        infowindow.open(kakaoMap,marker);

    },[])

    return(
        <div>
           <div id ="map" style={{width: "1000px", height:"400px"}}></div> 
        </div>
    )
}

function LandingPage(){

    const [timer, setTimer] = useState("00:00:00");

    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
        setTimer(`${hours}:${minutes}:${seconds}`)
    }

    const startTimer = () => {
        setInterval(currentTimer, 1000)
    }

    startTimer()

    return(
        <div>
            <table>
                <tr>
                    <td> <Maping /> </td>
                    <td><h5 style={{fontFamily: "Pacifico", fontSize:"24px"}}>현재시간 : {timer} </h5></td>
                </tr>
            </table>
            <br/>
            <br/>
            <table>
            <thead><h3>지역으로 이동하기 &gt;</h3></thead>
            <tr>
                    <td><img style={{width:"150px" , height:"150px"}} alt="서울" src={Seoul}/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="경기" src={Gyeonggi}/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="인천" src={Incheon}/></td>
                    <td><img style={{width:"130px", height:"130px"}} alt="강원" src={Gangwon}/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="충청" src={ChoongChung}/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="대전"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="전라"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="광주"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="경상"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="대구"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="울산"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="부산"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="제주"/></td>
            </tr>
            </table>
           
        </div>
    )
}

export default LandingPage;