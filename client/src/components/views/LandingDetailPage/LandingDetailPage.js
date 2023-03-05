import React,{useEffect} from "react";
import {Button,Select} from 'antd';
import {useLocation} from 'react-router-dom';
import StarInfo from "./Sections/StarInfo";
import Comments from "./Sections/Comment";



function LandingDetailPage(props){

    const location = useLocation(); 
    useEffect(()=>{
        console.log(location);
    
    },[location])
    
    const loc = location.pathname;
    console.log(loc);

    let title = "";
    let address = "";
    let time = "";

    if(loc === "/study/0")
    {
        title= "마포오랑"
        address = "서울 마포구 월드컵로1길 14 마포함께이룸센터 1층"
        time = "월~금: 10:00~22:00 휴게시간: 13:00~14:00 토: 10:00~17:00"
    }
    else if(loc === "/study/1")
    {
        title = "서교예술실험센터"
        address = "서울 마포구 잔다리로6길 33"
        time ="화~일: 11:00~20:00"
    }
    else if(loc === "/study/2")
    {
        title = "마포평생학습관"
        address = "서울 마포구 홍익로 2길 16"
        time ="(동절기) 매일: 08:00~22:00 휴무일: 둘째,넷째 월요일 / 공휴일  문헌정보실(09:00-20:00), 기타 자료실(09:00-18:00)"
    }
    else if(loc === "/study/3")
    {
        title ="캐치카페 신촌점"
        address = "서울 서대문구 연세로 8-1 버티고 타워 5층"
        time="월~금: 12:00~22:00 휴무일: 토,일요일"
    }
    else if(loc === "/study/4")
    {
        title ="티구시포 스터디카페"
        address="서울 마포구 양화로8길 16-4 2,3층"
        time="매일: 00:00~24:00"
    }
    else if(loc === "/study/5")
    {
        title ="공명 홍대/연남점"
        address="서울 마포구 연희로 11 한국특허정보원빌딩 1층"
        time="매일: 10:00~22:00 , 예약불가"
    }
    else if(loc === "/study/6")
    {
        title ="공본 스터디카페 서강대센터"
        address="서울 마포구 광성로 36-1 5층"
        time="매일: 00:00~24:00"
    }
    else if(loc === "/study/7")
    {
        title ="브라운시티 본점"
        address="서울 마포구 와우산로 88-1 2층"
        time="매일: 12:00~20:00"
    }
    else if(loc === "/study/8")
    {
        title ="도화아파트먼트"
        address="서울 마포구 도화2길 27"
        time="매일: 09:00~20:00"
    }
    else if(loc === "/study/9")
    {
        title ="채그로"
        address="서울 마포구 마포대로4다길 31 아리수빌딩 8층"
        time="매일: 10:00~22:00"
    }

    return(
        <div>
            <div>
            <table>
                <tr><td><h2>{title}</h2></td><td style={{paddingLeft:"1000px"}}><h2>태그</h2></td></tr>
                <tr><td><h4>{address}</h4></td><td style={{paddingLeft:"1000px"}}><h3>#공부하기 좋은</h3></td></tr>
                <tr><h4>영업시간</h4></tr>
                <tr><h4>{time}</h4></tr>
            </table>
            </div>
            <br />
            <div>
                <StarInfo />
            </div>
            <div>
                Review 
                <table>
                    <td><Button style={{width:"200px"}}>시간순</Button></td>
                    <td><Button style={{width:"200px"}}>평점순</Button></td>
                </table>
                <hr />
            </div>
            <div>
                <Comments />
            </div>
        </div>
    )
}

export default LandingDetailPage;