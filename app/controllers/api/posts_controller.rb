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
    @post = Post.new(post_params)
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :user_id)
  end

end
