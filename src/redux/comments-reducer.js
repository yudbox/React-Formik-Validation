const SEND_COMMENT_BODY = 'COMMENTS/SEND-COMMENT-BODY';
const DELETE_COMMENT_BODY = 'COMMENTS/DELETE-COMMENT-BODY';
const UPDATE_COMMENT_BODY = 'COMMENTS/UPDATE-COMMENT-BODY';
const SET_COMMENT_LIKE = 'COMMENTS/SET-COMMENT-LIKE';
const SET_COMMENT_DISLIKE = 'COMMENTS/COMMENT-COMMENT-DISLIKE';
const TOGGLE_SHADOW_MODE = 'COMMENTS/TOGGLE-SHADOW-MODE';

let initialState = {
    isShadowActive: false,
    comments: []
};


const commentsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_COMMENT_BODY: {
            let body = action.newCommentBody;
            return {
                ...state,
                comments: [...state.comments, { ...body }]
            }
        }
        case DELETE_COMMENT_BODY: {

            return {
                ...state,
                comments: [...state.comments.filter(comment => comment.id !== action.commentId)]
            }
        }
        case UPDATE_COMMENT_BODY: {

            return {
                ...state,
                comments: [...state.comments.map(comment => {
                    if (comment.id !== action.commentId) {
                        return comment
                    } else {
                        return { ...comment, comment: action.updatedCommentBody }
                    }
                }
                )]
            }
        }

        case SET_COMMENT_LIKE: {

            return {
                ...state,
                comments: [...state.comments.map(comment => {
                    if (comment.id !== action.commentId) {
                        return comment
                    } else {
                        return { ...comment, likesCount: action.commentStatus }
                    }
                }
                )]
            }
        }
        case SET_COMMENT_DISLIKE: {

            return {
                ...state,
                comments: [...state.comments.map(comment => {
                    if (comment.id !== action.commentId) {
                        return comment
                    } else {
                        return { ...comment, dislikesCount: action.commentStatus }
                    }
                }
                )]
            }
        }

        case TOGGLE_SHADOW_MODE: {

            return {
                ...state,
                isShadowActive: action.shadowMode
            }
        }


        default:
            return state;
    }
}

export const sendMessage = (newCommentBody) => ({ type: SEND_COMMENT_BODY, newCommentBody })
export const deleteMessage = (commentId) => ({ type: DELETE_COMMENT_BODY, commentId })
export const updateMessage = (commentId, updatedCommentBody) => ({ type: UPDATE_COMMENT_BODY, commentId, updatedCommentBody })
export const setLike = (commentId, commentStatus) => ({ type: SET_COMMENT_LIKE, commentId, commentStatus })
export const setDislike = (commentId, commentStatus) => ({ type: SET_COMMENT_DISLIKE, commentId, commentStatus })
export const toggleShadowMode = (shadowMode) => ({ type: TOGGLE_SHADOW_MODE, shadowMode })

export default commentsReducer;