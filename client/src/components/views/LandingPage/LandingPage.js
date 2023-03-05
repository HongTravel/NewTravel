import React from 'react';
import KakaoMapApi from './Section/KakaoMapApi';
import Card from './Section/Card';
import sample from '../Image/finding.png';

function LandingPage(){
    return(
        
        <div>
             <table>
                <tr>
                    <td><KakaoMapApi  /></td>
                    <td>&nbsp; &nbsp; &nbsp;</td>
                    <td>
                        <Card img= {sample} title="검색" text="원하는 카페, 도서관을 지도에서 마커로 클릭하세요" />   
                    </td>
                </tr>
             </table>
             
        </div>
    )
}

export default LandingPage;