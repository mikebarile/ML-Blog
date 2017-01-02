class Api::CommentsController < ApplicationController

  def create
    new_params = comment_params
    new_params["user_id"] = current_user.id
    @comment = Comment.new(new_params)
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    if !current_user || !params[:id] || current_user.id != Comment.find(params[:id]).user_id
      render json: "User does not have permission to delete this comment", status: 422
    else
      @comment = Comment.find(params[:id])
      @comment.destroy
      render "api/comments/show"
    end
  end

  def update
    @comment = Comment.find(comment_params[:id])
    if !current_user || !@comment || current_user.id != @comment.user_id
      render json: "User does not have permission to edit this comment", status: 422
    elsif @comment.update(comment_params)
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end

end
