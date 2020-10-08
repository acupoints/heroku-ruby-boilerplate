Rails.application.routes.draw do
  get 'fyrb_microposts/index'
  # get 'hello/index'
  root 'hello#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :fyrb_users, param: :_username
  post '/auth/login', to: 'fyrb_auths#login'
  resources :fyrb_microposts
  get '/*a', to: 'fyrb_auths#not_found'
end
