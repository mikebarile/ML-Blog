json.set! :id, post.id
json.set! :title, post.title
json.set! :body, post.body
json.set! :user_id, post.user_id
json.set! :first_name, post.user.first_name
json.set! :last_name, post.user.last_name
json.set! :created_at, post.created_at
json.set! :count_comments, post.comments.length

json.comments do
  json.partial! 'api/comments/comment', collection: post.comments.order(created_at: :desc), as: :comment
end
