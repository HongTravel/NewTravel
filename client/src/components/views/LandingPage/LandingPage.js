import React,{useEffect} from "react";

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
           <div id ="map" style={{width: "1500px", height:"700px"}}></div> 
        </div>
    )
}

function LandingPage(){
    return(
        <div>
            <Maping />
        </div>
    )
}

export default LandingPage;