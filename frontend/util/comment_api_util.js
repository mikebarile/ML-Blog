export const createComment = (comment, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/comments`,
    data: {"comment": comment},
    success,
    error
  });
};

export const deleteComment = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`,
    success,
    error
  });
};

export const editComment = (comment, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/comments/${comment.id}`,
    data: {"comment": comment},
    success,
    error
  });
};
