import React, {useState} from 'react'
import { connect } from 'react-redux';
import cl from './CommentsList.module.css'
import { Formik, Form, Field } from 'formik';
import { inputValidation } from '../../utilites/validators/validators'
import { TextareaElem } from '../common/FormControls/FormControls'
import ButtonSubmit from '../common/ButtonSubmit/ButtonSubmit';
import {sendMessage, deleteMessage, updateMessage, setLike, setDislike} from '../../redux/comments-reducer'
import {withBoxShadow} from '../../hoc/withBoxShadow'

const CommentsPostingForm = (props) => {


    const onSubmit = (values, onSubmitProps, ) => {

        let commentId = Math.floor(Math.random() * 100);
        let date = new Date()

        let comment = {
            id: commentId,
            comment: values.comment,
            likesCount: false,
            dislikesCount: false,
            dateOfCreation: date.toLocaleString()
        }
            props.sendMessage(comment)
            onSubmitProps.resetForm()

 

};
    
    return (
        <Formik
                initialValues= {{comment:''}}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={true}
            >
                {(props) => (

                    <Form >
                        <div className={cl.formControl__container}>
                        <div className={cl.formControl}>
                           <Field type="text" name="comment" placeholder="Your comment" validate={inputValidation} >
                                {TextareaElem}
                            </Field>
                        </div>
                        <ButtonSubmit name="Запостить" />
                        </div>

                    </Form>
                )}

            </Formik>
    )
}


const CommentsPostingFormWithShadow = withBoxShadow(CommentsPostingForm)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Comment = (props) => {


    const [editMode, setEditMode] = useState(false)
    const [commentValue, setCommentValue] = useState('')

    const deleteComment = () => {
        let commentId = props.id
        props.deleteMessage(commentId)
    }

    const activateEditMode = () => {
        setEditMode(true)
        setCommentValue(props.comment)
    }
    const changeInputValue = (e) => {
        let text = e.target.value
        setCommentValue(text)
    }
    const deactivateEditMode = () => {
        let commentId = props.id
        let updatedCommentBody = commentValue
        props.updateMessage(commentId, updatedCommentBody)
        setEditMode(false)
    }

    const setLike = () => {
        let commentId = props.id
        let likeStatus = props.likesCount
        props.setLike(commentId, !likeStatus)
        props.setDislike(commentId, false)
    }
    const setDislike = () => {
        let commentId = props.id
        let dislikeStatus = props.dislikesCount
        props.setLike(commentId, false)
        props.setDislike(commentId, !dislikeStatus)
    }

    return(
        <div className={cl.singleComment}>
            <div className={cl.singleComment_main}>
                <div className={cl.singleComment_info}>
                    <p className={cl.singleComment_edition}>Posted at {props.dateOfCreation}</p>
                    {editMode ? 
                    <input onChange={changeInputValue} className={cl.singleComment_input} value={commentValue} placeholder="Just edit your comment" /> : 
                    <p>{props.comment}</p>}
                    
                </div>
    
               {/* This is TOOLS MODE which allows to edit and delete single Comment */}
    
                <div className={cl.singleComment_tools}>
                    {editMode ? 
                    <span onClick={deactivateEditMode} className="material-icons icon save-icon">save</span> : 
                    <span onClick={activateEditMode}  className="material-icons icon edit-icon">create</span>}
                    
                    <span onClick={deleteComment} className="material-icons icon delete-icon">delete_forever</span>
                </div>
            </div>
    
                {/* This is ATTITUDE MODE which allows to show your attitude to  single Comment */}
    
            <div className={cl.singleComment_attitude}>
                
                <span onClick={setLike}  className={props.likesCount ? "material-icons icon liked" : "material-icons icon"}>thumb_up</span>
                <span onClick={setDislike} className={props.dislikesCount ?  "material-icons icon favorite" : "material-icons icon"}>thumb_down</span>
            </div>
        </div>
        )
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const CommentList = (props) => {
  
    let commentsItems = props.comments.map(comment => <Comment 
                                                        deleteMessage={props.deleteMessage} 
                                                        updateMessage={props.updateMessage} 
                                                        setLike={props.setLike} 
                                                        setDislike={props.setDislike}                                                         
                                                        key={comment.id} {...comment} />)

    return (
        <div className={cl.comments__container}>
                {commentsItems}
                <CommentsPostingFormWithShadow sendMessage={props.sendMessage} />
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        comments: state.commentsPage.comments,

    }
}



export default connect(mapStateToProps, {sendMessage, deleteMessage, updateMessage, setLike, setDislike})(CommentList)

