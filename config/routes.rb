Rails.application.routes.draw do
  # get 'fyrb_interfaces/index'
  # get 'fyrb_interfaces/show'
  # get 'fyrb_interfaces/create'
  # get 'fyrb_interfaces/update'
  # get 'fyrb_interfaces/destroy'
  # get 'fyrb_exceptions/index'
  # get 'fyrb_exceptions/show'
  # get 'fyrb_exceptions/create'
  # get 'fyrb_exceptions/update'
  # get 'fyrb_exceptions/destroy'
  # get 'fyrb_programs/index'
  # get 'fyrb_programs/show'
  # get 'fyrb_programs/create'
  # get 'fyrb_programs/update'
  # get 'fyrb_programs/destroy'
  # get 'fyrb_statements/index'
  # get 'fyrb_statements/show'
  # get 'fyrb_statements/create'
  # get 'fyrb_statements/update'
  # get 'fyrb_statements/destroy'
  # get 'fyrb_terms/index'
  # get 'fyrb_terms/show'
  # get 'fyrb_terms/create'
  # get 'fyrb_terms/update'
  # get 'fyrb_terms/destroy'
  # get 'fyrb_fragments/index'
  # get 'fyrb_fragments/show'
  # get 'fyrb_fragments/create'
  # get 'fyrb_fragments/update'
  # get 'fyrb_fragments/destroy'
  # get 'fyrb_tools/index'
  # get 'fyrb_tools/show'
  # get 'fyrb_tools/create'
  # get 'fyrb_tools/update'
  # get 'fyrb_tools/destroy'
  # get 'fyrb_tags/index'
  # get 'fyrb_tags/show'
  # get 'fyrb_tags/create'
  # get 'fyrb_tags/update'
  # get 'fyrb_tags/destroy'
  # get 'fyrb_microposts/index'

  # get 'hello/index'
  root 'hello#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :fyrb_users, param: :_username
  post '/auth/login', to: 'fyrb_auths#login'
  resources :fyrb_microposts
  resources :fyrb_tags
  resources :fyrb_tools
  resources :fyrb_terms
  resources :fyrb_statements
  resources :fyrb_fragments
  resources :fyrb_programs
  resources :fyrb_exceptions
  resources :fyrb_interfaces
  get '/*a', to: 'fyrb_auths#not_found'
end
