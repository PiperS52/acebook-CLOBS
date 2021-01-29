class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to posts_url, notice: "Logged in!"
      #check notices
    else

      flash[:alert] = "Email or password is invalid"
      render "index"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, alert: "Logged out!"
  end
end
