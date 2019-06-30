Rails.application.routes.draw do
  resources :users
  root 'users#index'
  resources :posts
  root 'posts#index'
end
