Rails.application.routes.draw do
  root 'users#new'
  resources :users
  resources :sessions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :posts do
    get 'data', on: :collection
    resources :likes
  end
  resources :comments do
    resources :likes
  end

  delete "users/:current_user_id/posts/:post_id" => "users/posts#show"
end
