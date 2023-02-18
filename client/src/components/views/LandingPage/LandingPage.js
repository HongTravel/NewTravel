import React,{useEffect, useState} from "react";
import Seoul from "../Image/seoul_logo.png";
import Gyeonggi from "../Image/gyeonggi_logo.png";
import Incheon from "../Image/incheon_logo.jpg";
import Gangwon from "../Image/Gangwon_logo.png";
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

function movetoSeoul(){
    window.location.href = "/seoul";
}

function movetoIncheon(){
    window.location.href = "/incheon";
}

function LandingPage(){

    return(
        <div>
            <table>
                <tr>
                    <td> <Maping /> </td>
                    <td>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xRbPAVnqtcs?loop=1&playlist=xRbPAVnqtcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </td>
                </tr>
            </table>
            <br/>
            <br/>
            <table>
            <thead><h3>지역으로 이동하기 &gt;</h3></thead>
            <tr>
                    <td><img style={{width:"150px" , height:"150px"}} alt="서울" src={Seoul} onClick={movetoSeoul}/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="경기" src={Gyeonggi}/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="인천" src={Incheon} onClick={movetoIncheon}/></td>
                    <td><img style={{width:"130px", height:"130px"}} alt="강원" src={Gangwon}/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="충청" /></td>
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