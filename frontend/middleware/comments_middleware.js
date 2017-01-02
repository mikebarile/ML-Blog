import { receiveNewComment, receiveEditedComment, removeComment,
  CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT
} from '../actions/comment_actions';

import { createComment, deleteComment, editComment } from '../util/comment_api_util';

export default ({ getState, dispatch }) => next => action => {
  const receiveNewCommentSuccess = booking => {
    dispatch(receiveNewComment(booking));
  };

  const receiveEditedCommentSuccess = booking => {
    dispatch(receiveEditedComment(booking));
  };

  const removeCommentSuccess = booking => {
    dispatch(removeComment(booking));
  };

  switch(action.type) {
    case CREATE_COMMENT:
      createComment(action.comment, receiveNewCommentSuccess);
      return next(action);
    case DELETE_COMMENT:
      deleteComment(action.id, removeCommentSuccess);
      return next(action);
    case EDIT_COMMENT:
      editComment(action.comment, receiveEditedCommentSuccess);
      return next(action);
    default:
      return next(action);
  }
};
