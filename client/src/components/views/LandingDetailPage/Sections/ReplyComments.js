import React, {useEffect, useState} from 'react';
import SingleComment from './SingleComments';

function ReplyComment(props){
    const [ChildCommentNumber, setChildCommentNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] =useState(true)

    useEffect(() => {
        let commentNumber = 0;

        setChildCommentNumber(commentNumber)
    },[])

    const renderReplyComment = (parentCommentId) =>{
        <React.Fragment>
            <SingleComment />
            <ReplyComment />
        </React.Fragment>
    }
    const handleChange = () => {
        setOpenReplyComments(!OpenReplyComments)
    }

    return(
        <div>
        
        </div>
    )
}

export default ReplyComment;
