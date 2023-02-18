import React,{useEffect} from "react";
import axios from 'axios';
const {Tmapv2} = window;

var map;
var marker_s;
var marker_e;

function showRoute(event){
    map.zoomToExtent(this.getDataExtent());
}


function Navigation(){

    const init = () =>{

        map = new Tmapv2.Map("maps",{
            center: new Tmapv2.LatLng(37.49241689559544, 127.03171389453507),
            width: "100%",
            height: "400px",
            zoom: 11,
            zoomControl: true,
            scrollwheel: true
        });

        marker_s = new Tmapv2.Marker(
            {
                position: new Tmapv2.LatLng(37.566567545861645,
                    126.9850380932383),
                icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
                iconSize: new Tmapv2.Size(24,38),
                map : map
            }
        );

        marker_e = new Tmapv2.Marker(
            {
                position: new Tmapv2.LatLng(37.403049076341794,
                    127.10331814639885),
                icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
                iconSize: new Tmapv2.Size(24,38),
                map : map
            }
        );

      
    }
    useEffect(()=>{
        init();
    },[])
    return(
       <div id="maps">

       </div>
    )
}

export default Navigation;