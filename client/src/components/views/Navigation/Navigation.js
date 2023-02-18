import React,{useEffect} from "react";
const {Tmapv2} = window;

var map;
var marker_s;
var marker_e;

function showRoute(event){
    map.zoomToExtent(this.getDataExtent());
}

function Navigation(){

    const init = () =>{

        map = new Tmapv2.Map("map_div",{
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
                map: map
            }
        );

        marker_e = new Tmapv2.Marker(
            {
                position: new Tmapv2.LatLng(37.403049076341794,
                    127.10331814639885),
                icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
                iconSize: new Tmapv2.Size(24,38),
                map: map
            }
        );
       
    }

    const drawDirections = () =>{
        var startX = 37.566567545861645;
        var startY = 126.9850380932383;
        var endX = 37.403049076341794;
        var endY = 127.10331814639885;

        var route = new Tmapv2.Format.KML({extractStyle: true, extractAttribute: true});
        var urlStr = "https://apis.skplanetx.com/tmap/routes/pedestrian?version=1&sort=custom&form=xml";
        urlStr += "&startName='" + encodeURIComponent("출발지")+"'&endName='"+encodeURIComponent("도착지")+"'";
        urlStr += "&startX="+startX + "&startY="+startY+"&endX"+endX+"&endY"+endY;
        urlStr += "&appKey=y3ExVzkNtK2ueIeL6Icvj5ntu2cG1KmKanwCz038";

        var road = new Tmapv2.Protocol.HTTP({
            url:urlStr,
            format: route
        });

        var routeLayer = new Tmapv2.Layer.Vector("route",{protocol: road, strategies:[new Tmapv2.Strategy.Fixed()]});

        routeLayer.events.register("featuresadded", routeLayer,showRoute);

        map.addLayers([routeLayer]);
    }
    useEffect(()=>{
        init();
    },[])
    return(
        <div id="map_div">

        </div>
    )
}

export default Navigation;