import { useState } from "react";
import { createComment as createCommentApi} from '../api';
import Comment from './Comment';
import CommentForm from './CommentsForm';

import './comments.scss'


const Comments = () => {
    
    const [backendComments, setBackendComments] = useState([])
    const rootComments = backendComments.filter(backendComment => backendComment.parentId === null);

    const addComment = (text, parentId) => {
        console.log('addComment',text, parentId)
        createCommentApi(text, parentId)
            .then(comment => {
                setBackendComments([comment, ...backendComments]);
            })
    }

    return(
        <div className="comments">
            <h3 className="comments-title">Comment</h3>
            <CommentForm submitLabel = 'Save' handleSubmit={addComment}/>
            <div className="comments-container">
                {rootComments.map(rootComment => (
                <Comment key = {rootComment.id} comment = {rootComment}/>))}
            </div>
        </div>
    )
}


export default Comments;