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

  # def index
  #   @posts = Post.select("username, message, posts.id, posts.created_at").joins("INNER JOIN users ON users.id = posts.user_id")
  # end

  def index
    @posts = Post.joins("INNER JOIN users ON posts.user_id = users.id")
  end

  # def data
  #   posts_with_username = Post.select("username, message, posts.id, posts.created_at").joins("INNER JOIN users ON users.id = posts.user_id")
  #   puts posts_with_username
  #   render json: posts_with_username.to_json
  # end

  def data
    posts_with_username = Post.joins("INNER JOIN users ON posts.user_id = users.id")
    puts posts_with_username
    render json: posts_with_username.to_json
  end

  def destroy
    @post = Post.find_by(id: params[:id]).destroy
    redirect_to :index
  end

  private

  def post_params
    params.require(:post).permit(:message, :user_id)
  end

end
