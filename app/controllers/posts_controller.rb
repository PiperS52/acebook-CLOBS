class PostsController < ApplicationController

  before_action :authorize, except: :index
  skip_before_action :verify_authenticity_token


  def show
    @post = Post.find(params[:id])
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
    @posts = Post.joins(:user).select('posts.*, users.*')
  end

  def data
    posts_with_username = Post.joins(:user).select('posts.*, users.*')
    puts posts_with_username
    render json: posts_with_username.to_json
  end

  private

  def post_params
    params.require(:post).permit(:message, :user_id)
  end 

end
