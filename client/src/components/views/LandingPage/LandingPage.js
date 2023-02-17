import React,{useEffect, useState} from "react";

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
           
        </div>
    )
}

export default LandingPage;