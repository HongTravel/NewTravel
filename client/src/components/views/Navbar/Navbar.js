import React,{useState} from "react"
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import {InfoCircleOutlined} from "@ant-design/icons";
import './Sections/Navbar.css';

function Navbar(){
    const [timer, setTimer] = useState("00:00:00");

    const todayTime = () => {
        let now = new Date();
        let todayYear = now.getFullYear();
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
        const week = ['Sun', 'Mon' , 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat'];
        let dayOfWeek = week[now.getDay()];
        
        return todayYear + '/' + todayMonth + '/' + todayDate + ' ' + '(' + dayOfWeek + ')' + ' ';
    }

    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
        setTimer(`${hours}:${minutes}:${seconds}`)
    }

    const startTimer = () => {
        setInterval(currentTimer, 1000)
    }

    startTimer()




    return(
        <nav className="menu" style={{position: 'absolute', zIndex: 5, width: '100%'}}>
           <div className="menu_logo">
           <a href ="/"><InfoCircleOutlined  /> &nbsp; HongTravel</a>
           </div>
           <div className = "menu_container">
            <div className="menu_left">
              <LeftMenu mode="horizontal" />
            </div>
            <div className="menu_right">
              <RightMenu />
            </div>
           </div>
            
        </nav>
    )
}

export default Navbar;