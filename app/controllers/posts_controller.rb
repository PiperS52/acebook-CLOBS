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
    p post_params
    @post = Post.create(post_params)
    redirect_to posts_url
  end

  def index
    @posts = Post.joins("INNER JOIN users ON posts.user_id = users.id").select('posts.*, users.*').order(id: :desc)
  end

  def data
    posts_with_username = Post.joins("INNER JOIN users ON posts.user_id = users.id").select('posts.*, users.*').order(id: :desc)
    puts posts_with_username
    render json: posts_with_username.to_json
  end

  def find_likes 
    @post = Post.find(params[:id])
    @likes = @post.likes
    render json: @likes.to_json
  end

  private

  def post_params
    params.require(:post).permit(:message, :user_id)
  end
  
end