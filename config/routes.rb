Rails.application.routes.draw do
  
  root 'users#new'
  resources :users
  resources :sessions
  
  resources :posts do
    get 'data', on: :collection
    get 'find_likes', on: :member
    resources :likes
  end

  resources :comments do
    resources :likes
  end 

end
