import React, {useEffect, useState} from 'react';
import {Descriptions} from 'antd'
import StarRate from './StarRate';

function StarInfo(props){
    const [AverageStar, setAverageStar] = useState([])

    useEffect(() => {
        setAverageStar(props.detail)
        console.log("type of AverageStar : " , typeof(AverageStar))
    }, [props.detail])

    const RoundAverageStar = Number(AverageStar).toFixed(1);

    const showStar = () => {
        return(
            <Descriptions layout = 'horizontal' title="카페정보">
                <Descriptions.Item label ="평점" labelStyle={{marginTop:'15px'}} contentStyle={{marginTop: '15px'}}>
                    {`${RoundAverageStar}점`}
                </Descriptions.Item>
                <Descriptions.Item>
                    <StarRate AverageStar = {AverageStar} />
                </Descriptions.Item>
            </Descriptions>
        )
    }

    return(
        <div>
            {showStar()}
            <br />
        </div>
    )
}
export default StarInfo;