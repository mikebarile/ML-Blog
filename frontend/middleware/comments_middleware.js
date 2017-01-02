import { receiveNewComment, receiveEditedComment, removeComment,
  CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT
} from '../actions/comment_actions';

import { createComment, deleteComment, editComment } from '../util/comment_api_util';

export default ({ getState, dispatch }) => next => action => {
  const receiveNewCommentSuccess = comment => {
    dispatch(receiveNewComment(comment));
  };

  const receiveEditedCommentSuccess = comment => {
    dispatch(receiveEditedComment(comment));
  };

  const removeCommentSuccess = comment => {
    dispatch(removeComment(comment));
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
