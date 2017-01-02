export const CREATE_COMMENT = "CREATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const RECEIVE_EDITED_COMMENT = "RECEIVE_EDITED_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id
});

export const editComment = (comment) => ({
  type: EDIT_COMMENT,
  comment
});

export const receiveNewComment = (comment) => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

export const receiveEditedComment = (comment) => ({
  type: RECEIVE_EDITED_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});
