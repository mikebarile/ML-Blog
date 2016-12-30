export const fetchPost = (title, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/posts/${title}`,
    success,
    error
  });
};

export const fetchPosts = (success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/posts`,
    success,
    error
  });
};

export const createPost = (post, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/posts`,
    data: {"post": post},
    success,
    error
  });
};

export const deletePost = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`,
    success,
    error
  });
};

export const editPost = (post, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/posts/${post.id}`,
    data: {"post": post},
    success,
    error
  });
};
