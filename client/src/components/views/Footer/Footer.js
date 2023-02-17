import React from "react"
import logo from "../Image/HongTravel.png";
function Footer(){
    return(
        <div style={{marginTop: "300px"}}>
            <table>
              <tr>
                <td><img style={{width:"200px", height:"150px"}}alt="hongtravel" src={logo}/></td>
                <td><h3>Developers &nbsp;&nbsp;</h3></td>
                <td><h5>Frontend : 이동욱 &nbsp;</h5></td>
                <td><h5>Backend: 우채윤, 김진현</h5></td>
             </tr>
            </table>
        </div>
    )
}

export default Footer;