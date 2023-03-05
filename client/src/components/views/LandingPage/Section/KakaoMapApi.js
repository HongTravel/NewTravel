import React, {useEffect, useState} from 'react';
import geojson from './TL_SCCO_CTPRVN (1).json';
import {Map, MapMarker} from "react-kakao-maps-sdk";
const {kakao} = window;


function KakaoMapApi(props){
    
  
  var positions = [
    {
      title: "마포오랑",
      content: '<div><h4>마포오랑</h4> <h5>주소: 서울 마포구 월드컵로1길 14 마포함께이룸센터 1층</h5> <h5>영업시간</h5> <h5>월~금: 10:00~22:00 휴게시간: 13:00~14:00</h5> <h5>토: 10:00~17:00</h5><a href="/study/0">상세정보로 이동하기</a></div>',
      latlng: new kakao.maps.LatLng(37.55004384577977,126.91205707779953) 
    },

    {
      title: "서교예술실험센터",
      content: '<div><h4>서교예술실험센터</h4> <h5>주소: 서울 마포구 잔다리로6길 33</h5> <h5>영업시간</h5> <h5>화~일: 11:00~20:00</h5><a href="/study/1">상세정보로 이동하기</a></div>',
      latlng: new kakao.maps.LatLng(37.55248215756455,126.91995339807524)
    },

    {
      title: "마포평생학습관",
      content: '<div><h4>마포평생학습관</h4> <h5>주소: 서울 마포구 홍익로2길 16</h5> <h5>영업시간(동절기)</h5> <h5>매일: 08:00~22:00 </h5> <h5>휴무일: 둘째,넷째 월요일 / 공휴일</h5><h5>문헌정보실(09:00-20:00), 기타 자료실(09:00-18:00)</h5><a href="/study/2">상세정보로 이동하기</a></div>',
      latlng: new kakao.maps.LatLng(37.55435833726389,126.92312019853762)
    },
    {
      title: "캐치카페 신촌점",
      content:'<div><h4>캐치카페 신촌점</h4> <h5>주소: 서울 서대문구 연세로 8-1 버티고타워 5층</h5> <h5>영업시간</h5> <h5>월~금: 12:00~22:00</h5> <h5>휴무일: 토,일요일</h5><a href="/study/3">상세정보로 이동하기</a></div>',
      latlng: new kakao.maps.LatLng(37.55633757356887,126.93631433326188)
    },
    {
      title: "티구시포 스터디카페",
      content:'<div><h4>티구시포 스터디카페</h4> <h5>주소: 서울 마포구 양화로8길 16-4 2,3층</h5> <h5>영업시간</h5> <h5>매일: 00:00~24:00</h5><a href="/study/4">상세정보로 이동하기</a></div>',
      latlng: new kakao.maps.LatLng(37.54993786450257,126.91497685918007) 
    },
    {
      title: "공명 홍대/연남점",
      content: '<div><h4>카페 공명</h4> <h5>주소: 서울 마포구 연희로 11 한국특허정보원빌딩 1층</h5> <h5>영업시간</h5> <h5>매일: 10:00~22:00 , 예약불가</h5><a href="/study/5">상세정보로 이동하기</a></div>',
      latlng: new kakao.maps.LatLng( 37.559863062403906 , 126.92535550712246) 
    },
    {
      title: "공본 스터디카페 서강대센터",
      content: '<div><h4>공본 스터디카페</h4> <h5>주소: 서울 마포구 광성로 36-1 5층</h5> <h5>영업시간</h5> <h5>매일: 00:00~24:00</h5><a href="/study/6">상세정보로 이동하기</a></div>',
      latlng: new kakao.maps.LatLng( 37.54960161382746 , 126.93612994848843)
    },
    {
      title: "브라운시티 본점",
      content:'<div><h4>브라운시티 본점</h4> <h5>주소: 서울 마포구 와우산로 88-1 2층</h5> <h5>영업시간</h5> <h5>매일: 12:00~20:00</h5><a href="/study/7">상세정보로 이동하기</a></div>',
      latlng: new kakao.maps.LatLng(37.5526504751685,126.92378286047425 ) 
    },
    {
      title: "도화아파트먼트",
      content:'<div><h4>도화아파트먼트</h4> <h5>주소: 서울 마포구 도화2길 27 </h5> <h5>영업시간</h5> <h5>매일: 09:00~20:00</h5><a href="/study/8">상세정보로 이동하기</a></div>',
      latlng: new kakao.maps.LatLng(37.566535427152694,126.93372039013902) 
    },
    {
      title: "채그로",
      content:'<div><h4>채그로</h4> <h5>주소: 서울 마포구 마포대로4다길 31 아리수빌딩 8층</h5> <h5>영업시간</h5> <h5>매일: 10:00~22:00</h5><a href="/study/9">상세정보로 이동하기</a></div>',
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
            image: markerImage
        })

        var iwRemoveable = true;

        var infowindow = new kakao.maps.InfoWindow({
          content: positions[i].content,
          removable: iwRemoveable
        })

        function makeOverListener(map,marker,infowindow){
          return function(){
              infowindow.open(map,marker);
          };
        }

        kakao.maps.event.addListener(marker,'click',makeOverListener(map,marker,infowindow));        

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