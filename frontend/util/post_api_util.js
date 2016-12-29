export const fetchPost = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}`,
    success,
    error
  });
};

export const fetchPosts = (params, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/posts`,
    data: {"post": params},
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
