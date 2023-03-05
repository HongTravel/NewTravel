import React, {useState} from 'react';
import {Comment, Avatar, Button, Input} from 'antd';
import axios from 'axios';
import {useSelector} from 'react-redux';

const {TextArea} = Input;

function SingleComment(props){
    const [CommentValue, setCommentValue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const onClickReplyOpen = () =>{
        setOpenReply(!OpenReply)
        props.toggle()
    }

    const actions = [
        <span onClick={onClickReplyOpen} key="comment-basic-reply-to">Reply to</span>
    ]

    return(
        <div>
            <Comment
                actions = {actions}
                avatar = {<Avatar alt="image" />}
                content = {
                    <p>
                        아주 좋습니다.
                    </p>
                }
            >

            </Comment>
            {OpenReply &&
            <form style={{display:'flex'}}>
                <TextArea
                  style={{width:'100%', borderRadius: '5px'}}
                  onChange={handleChange}
                  value={CommentValue}
                  placeholder="답글을 작성해주세요!">

                </TextArea>
                <br />
                <Button style={{width:'10%'}}>답글</Button>
            </form>
        
        }
        </div>
    )
}
export default SingleComment;