class LikesController < ApplicationController
  # before_action :load_likable
  skip_before_action :verify_authenticity_token

  def index
    @post = Post.find(params[:post_id])
    @likes = @post.likes
  end

  # def new
  #   @like = Post.like.new
  # end

  def create
    @like = Like.create(like_params)
  end

  private

  def like_params
    params.require(:like).permit(:likable_type, :likable_id, :user_id)
  end

  # def load_likable
  #   klass = [Post, Comment].detect { |l| params["#{l.name.underscore}_id"]}
  #   @likable = klass.find(params["#{klass.name.underscore}_id"])
  # end
  
end