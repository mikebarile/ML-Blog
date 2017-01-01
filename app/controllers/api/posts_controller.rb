class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.order(created_at: :desc).limit(18)
  end

  def show
    @post = Post.where("title = '#{params[:id]}'").first
  end

  def patch
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def create
    new_params = post_params
    new_params["user_id"] = current_user.id
    @post = Post.new(new_params)
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    if !current_user || !params[:id] || current_user.id != Post.find(params[:id]).user_id
      render json: "User does not have permission to delete this post", status: 422
    else
      @post = Post.find(params[:id])
      @post.destroy
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

end
