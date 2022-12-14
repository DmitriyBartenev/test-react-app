import { useState } from "react"

import './comments.scss'

const CommentForm = ({handleSubmit, submitLabel}) => {
    const [text, setText] = useState('')
    const isTextAreaDisabled = text.length === 0;

    const onSubmit = e => {
        e.preventDefault()
        handleSubmit(text);
        setText('')
    }

    return(
        <form onSubmit={onSubmit}>
            <textarea 
                className="comment-form-textarea" 
                value = {text}
                onChange={(e) => setText(e.target.value)}/>
            <p>Write a few sentences about the photo.</p>
            <button className="comment-form-button" disabled={isTextAreaDisabled}>{submitLabel}</button>
        </form>
    );
};


export default CommentForm;