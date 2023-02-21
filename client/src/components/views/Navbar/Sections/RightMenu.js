import React,{useState} from "react";

function RightMenu(){
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
        <div>
            <h5 style={{fontFamily: "Pacifico", fontSize:"12px"}}>{todayTime()}  현재시간: {timer}</h5>
        </div>
           
    )
}

export default RightMenu;