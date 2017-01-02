export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const RECEIVE_EDITED_COMMENT = "RECEIVE_EDITED_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CLEAR_STATE = "CLEAR_STATE";

export const fetchReviews = (params) => ({
  type: FETCH_COMMENTS,
  params
});

export const createReview = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

export const deleteReview = (id) => ({
  type: DELETE_COMMENT,
  id
});

export const editReview = (comment) => ({
  type: EDIT_COMMENT,
  comment
});

export const receiveNewReview = (comment) => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

export const receiveEditedReview = (comment) => ({
  type: RECEIVE_EDITED_COMMENT,
  comment
});

export const receiveReviews = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const removeReview = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});


export const clearState = () => ({
  type: CLEAR_STATE
});
