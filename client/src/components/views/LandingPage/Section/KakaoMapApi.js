import React, {useEffect, useState} from 'react';
import geojson from './TL_SCCO_CTPRVN (1).json';
import {Map, MapMarker} from "react-kakao-maps-sdk";
const {kakao} = window;


function KakaoMapApi(){
    
  
  var positions = [
    {
      title: "마포오랑",
      latlng: new kakao.maps.LatLng(37.55004384577977,126.91205707779953) 
    },

    {
      title: "서교예술실험센터",
      latlng: new kakao.maps.LatLng(37.55248215756455,126.91995339807524)
    },

    {
      title: "마포평생학습관",
      latlng: new kakao.maps.LatLng(37.55435833726389,126.92312019853762)
    },
    {
      title: "캐치카페 신촌점",
      latlng: new kakao.maps.LatLng(37.55633757356887,126.93631433326188)
    },
    {
      title: "티구시포 스터디카페",
      latlng: new kakao.maps.LatLng(37.54993786450257,126.91497685918007) 
    },
    {
      title: "공명 홍대/연남점",
      latlng: new kakao.maps.LatLng( 37.559863062403906 , 126.92535550712246) 
    },
    {
      title: "공본 스터디카페 서강대센터",
      latlng: new kakao.maps.LatLng( 37.54960161382746 , 126.93612994848843)
    },
    {
      title: "브라운시티 본점",
      latlng: new kakao.maps.LatLng(37.5526504751685,126.92378286047425 ) 
    },
    {
      title: "도화아파트먼트",
      latlng: new kakao.maps.LatLng(37.566535427152694,126.93372039013902) 
    },
    {
      title: "채그로",
      latlng: new kakao.maps.LatLng(37.535657316466136,126.94229684545304)
    }
  ]

  var imageSrc =  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

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

      for(var i= 0; i < positions.length; i++)
      {
        var imageSize = new kakao.maps.Size(24,35);

        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        var marker = new kakao.maps.Marker({
            map: map,
            position: positions[i].latlng,
            title: positions[i].title,
            image: markerImage
        })
      }

     }, []);

     return(
        <div>
            <div id ="MyMap" style={{width:"1000px", height: "400px"}} >
          
            </div>
        </div>
     )
}

export default KakaoMapApi;