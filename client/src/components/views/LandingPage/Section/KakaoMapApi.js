import React, {useEffect, useState} from 'react';
import geojson from './TL_SCCO_CTPRVN (1).json';
const {kakao} = window;

function KakaoMapApi(){
   
    useEffect(() => {
        let data = geojson.features;
        let coordinates = []; //좌표 저장 배열
        let name = ''; //행정구 이름
    
        let polygons = [];
    
        const mapContainer = document.getElementById('MyMap'); // 지도를 표시할 div
        const mapOption = {
          center: new kakao.maps.LatLng(37.552635722509,126.92436042413), // 지도의 중심좌표
          level: 7, // 지도의 확대 레벨
        };
    
        const map = new kakao.maps.Map(mapContainer, mapOption);
        const customOverlay = new kakao.maps.CustomOverlay({});
    
        const displayArea = (coordinates, name) => {
          let path = [];
          let points = [];
    
          coordinates[0].forEach((coordinate) => {
            let point = {};
            point.x = coordinate[1];
            point.y = coordinate[0];
            points.push(point);
            path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
          });
    
          let polygon = new kakao.maps.Polygon({
            map: map,
            path: path, 
            strokeWeight: 2, 
            strokeColor: '#004c80', 
            strokeOpacity: 0.8, 
            strokeStyle: 'solid', 
            fillColor: '#fff', 
            fillOpacity: 0.7, 
          });
    
          polygons.push(polygon);
    
          
          kakao.maps.event.addListener(polygon, 'mouseover', function (mouseEvent) {
            polygon.setOptions({ fillColor: '#09f' });
    
            customOverlay.setContent('<div class="area">' + name + '</div>');
    
            customOverlay.setPosition(mouseEvent.latLng);
            customOverlay.setMap(map);
          });
    
        
          kakao.maps.event.addListener(polygon, 'mousemove', function (mouseEvent) {
            customOverlay.setPosition(mouseEvent.latLng);
          });
    
          kakao.maps.event.addListener(polygon, 'mouseout', function () {
            polygon.setOptions({ fillColor: '#fff' });
            customOverlay.setMap(null);
          });
    
        };
    
        data.forEach((val) => {
          coordinates = val.geometry.coordinates;
          name = val.properties.SIG_KOR_NM;
    
          displayArea(coordinates, name);
        });
     }, []);

     return(
        <div>
            <div id ="MyMap" style={{width:"1000px", height: "400px"}} >
                </div>
        </div>
     )
}

export default KakaoMapApi;