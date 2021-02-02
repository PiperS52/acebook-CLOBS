class PostsController < ApplicationController

  before_action :authorize, except: :index
  skip_before_action :verify_authenticity_token


  def show
    @post = Post.find(params[:id])
    # @likable = @post
    # @likes = @likable.likes 
    # @like = Like.new
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.create(post_params)
    redirect_to posts_url
  end

  def index
    @posts = Post.all
  end

  def data
    @posts = Post.all
    render json: @posts.to_json
  end

  private

  def post_params
    params.require(:post).permit(:message, :user_id)
  end

end
