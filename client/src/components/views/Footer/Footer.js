import React from "react"
import logo from "../Image/HongTravel.png";
import './Footer.css';
function Footer(){
    return(
        <div style={{marginTop: "300px"}}>
            <table>
              <tr>
                <td><img style={{width:"200px", height:"150px"}}alt="hongtravel" src={logo}/></td>
                <td><h3>Developers &nbsp;&nbsp;</h3></td>
                <td><h5>Frontend : 이동욱 &nbsp;</h5></td>
                <td><h5>Backend: 우채윤, 김진현 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h5></td>
                <td>
                <div class = "share-button">
                <span><i class ="fas fa-share-alt"></i> Share! </span>
                <a href ="#"><i class="fab fa-facebook-f"></i></a>
                <a href ="#"><i class="fab fa-twitter"></i></a>
                <a href ="#"><i class="fab fa-instagram"></i></a>
                <a href ="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
                </td>
                <td><a href="/about">&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;About our website</a></td>
             </tr>
            </table>
        </div>

    )
}

export default Footer;