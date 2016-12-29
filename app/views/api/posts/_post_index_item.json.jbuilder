json.set! :id, post.id
json.set! :title, post.title

if post.body.length > 500
  json.set! :body, post.body[0...500] + "..."
else
  json.set! :body, post.body
end

json.set! :first_name, post.user.first_name
json.set! :last_name, post.user.last_name
json.set! :created_at, post.created_at
