import React from 'react';
import KakaoMapApi from './Section/KakaoMapApi';
import Card from './Section/Card';

import sample from '../Image/HongTravel.png';
function LandingPage(){
    return(
        
        <div>
             <table>
                <tr>
                    <td><KakaoMapApi  /></td>
                    <td>&nbsp; &nbsp; &nbsp;</td>
                    <td>
                        <Card img = {sample} title="제목" text="내용내용내용" />
                        <Card img = {sample} title="제목22" text="내용222222" />
                       
                    </td>
                </tr>
             </table>
             
        </div>
    )
}

export default LandingPage;