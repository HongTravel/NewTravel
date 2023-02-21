import React,{useEffect, useState} from "react";
import Seoul from "../Image/seoul_logo.png";
import Gyeonggi from "../Image/gyeonggi_logo.png";
import Incheon from "../Image/incheon_logo.jpg";
import Gangwon from "../Image/Gangwon_logo.png";
import KakaoMapApi from "./Sections/KakaoMapApi";
import './Sections/LandingPage.css';

function movetoSeoul(){
    window.location.href = "/seoul";
}

function movetoIncheon(){
    window.location.href = "/incheon";
}

function LandingPage(){
    const [Inputtext, setInputText] = useState('');
    const [Place, setPlace] = useState('');

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(Inputtext);
        setInputText('');
    }

    return(
        <div>
            <div className="init">
            <label>
                 <h3>장소검색:</h3>&nbsp;
                </label>
                <form className ="inputForm" onSubmit={handleSubmit}>
                <input style={{width:"300px"}} onChange={onChange} value={Inputtext} placeholder="검색어를 입력하세요"/>
                <button type="submit">검색</button>
                </form>
                
            </div>
            <br />
            <table>
                <tr>
                    <td><KakaoMapApi searchPlace={Place}/></td>
                    <td>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xRbPAVnqtcs?loop=1&playlist=xRbPAVnqtcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </td>
                </tr>
            </table>
            <br/>
            <br/>
            <table>
            <thead><h3>지역으로 이동하기 &gt;</h3></thead>
            <tr>
                    <td><img style={{width:"150px" , height:"150px"}} alt="서울" src={Seoul} onClick={movetoSeoul}/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="경기" src={Gyeonggi}/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="인천" src={Incheon} onClick={movetoIncheon}/></td>
                    <td><img style={{width:"130px", height:"130px"}} alt="강원" src={Gangwon}/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="충청" /></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="대전"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="전라"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="광주"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="경상"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="대구"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="울산"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="부산"/></td>
                    <td><img style={{width:"150px", height:"150px"}} alt="제주"/></td>
            </tr>
            </table>
           
        </div>
    )
}

export default LandingPage;