import React, {useEffect} from 'react';

const {kakao} = window;

const KakaoMapApi = ({searchPlace}) => {
    useEffect(()=> {
        var infowindow = new kakao.maps.InfoWindow({zIndex: 1});
        const container = document.getElementById('myMap');
        const options = {
            center : new kakao.maps.LatLng(37.552635722509,126.92436042413),
            level: 3,
        }
        const map = new kakao.maps.Map(container, options);

        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(searchPlace, placesSearchCB);

        function placesSearchCB(data, status, pagination){
            if(status === kakao.maps.services.Status.OK){
                let bounds = new kakao.maps.LatLngBounds();

                for(let i = 0; i < data.length; i++)
                {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                map.setBounds(bounds);
            }
            
        function displayMarker(place){
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
            })

            kakao.maps.event.addListener(marker,'click', function(){
                infowindow.setContent('<div style="padding:5px;font-size:12px;">'+place.place_name+'</div>');
                infowindow.open(map,marker);
            })
        }
        }
    },[searchPlace])

    return(
        <div id ="myMap" style={{width:"1000px", height:"400px"}}>

        </div>
    )
}



export default KakaoMapApi;