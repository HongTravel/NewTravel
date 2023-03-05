import React, {useState} from 'react';
import {Button, Input} from 'antd';
import axios from 'axios';
import {useSelector} from 'react-redux';
import SingleComment from './SingleComments';
import ReplyComment from './ReplyComments';

function Comments(props){
    const [Comment, setComment] = useState("");
    const [OpenComments, setOpenComments] = useState(true);

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }
    
    const toggle = () => {
        setOpenComments(!OpenComments);
    }

    return(
        <div>
            <br />
            <div>
                <div style={{fontSize: '20px', fontWeight:'bold'}}>
                    댓글
                </div>
            </div>
            <hr />
            <React.Fragment>
                <SingleComment comment={Comment} OpenComments={OpenComments} toggle={toggle} /> 
                <ReplyComment />
            </React.Fragment>
        </div>
    )
}

export default Comments;