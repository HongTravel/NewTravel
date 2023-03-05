import React,{useEffect} from "react";
import {useLocation} from 'react-router-dom';


function LandingDetailPage(props){

    const location = useLocation(); 
    useEffect(()=>{
        console.log(location);
    
    },[location])
    
    const loc = location.pathname;
    console.log(loc);

    let title = "";
    let content = "";

    if(loc === "/study/0")
    {
        title= "마포오랑"
    }
    else if(loc === "/study/1")
    {
        title = "서교예술실험센터"
    }
    else if(loc === "/study/2")
    {
        title = "마포평생학습관"
    }
    else if(loc === "/study/3")
    {
        title ="캐치카페 신촌점"
    }
    else if(loc === "/study/4")
    {
        title ="티구시포 스터디카페"
    }
    else if(loc === "/study/5")
    {
        title ="공명 홍대/연남점"
    }
    else if(loc === "/study/6")
    {
        title ="공본 스터디카페 서강대센터"
    }
    else if(loc === "/study/7")
    {
        title ="브라운시티 본점"
    }
    else if(loc === "/study/8")
    {
        title ="도화아파트먼트"
    }
    else if(loc === "/study/9")
    {
        title ="채그로"
    }

    return(
        <div>
            <table>
                <tr><h2>{title}</h2></tr>
            </table>
        </div>
    )
}

export default LandingDetailPage;