class LikesController < ApplicationController
  before_action :load_likable

  def index
    # load_likable could be replaced by @likable = Post.find(params[:post_id])
    @likes = @likable.likes
  end

  def new
    @like = @likable.liks.new
  end

  def create
    @like = @likable.likes.new(params[:like])
    if @like.save
      redirect_to [@likable, :likes], notice: "Like created"
    else
      render :new
    end
  end

  private

  def load_likable
    klass = [Post, Comment].detect { |l| params["#{l.name.underscore}_id"]}
    @likable = klass.find(params["#{klass.name.underscore}_id"])
  end
end
