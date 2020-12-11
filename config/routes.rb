Rails.application.routes.draw do
  # get 'fyrb_object_inspectors/index'
  # get 'fyrb_object_inspectors/show'
  # get 'fyrb_object_inspectors/create'
  # get 'fyrb_object_inspectors/update'
  # get 'fyrb_object_inspectors/destroy'
  # get '/index'
  # get 'fyrb_graphic_symbols/show'
  # get 'fyrb_graphic_symbols/create'
  # get 'fyrb_graphic_symbols/update'
  # get 'fyrb_graphic_symbols/destroy'
  # get '/index'
  # get 'fyrb_surprising_links/show'
  # get 'fyrb_surprising_links/create'
  # get 'fyrb_surprising_links/update'
  # get 'fyrb_surprising_links/destroy'
  # get '/index'
  # get 'fyrb_code_snippets/show'
  # get 'fyrb_code_snippets/create'
  # get 'fyrb_code_snippets/update'
  # get 'fyrb_code_snippets/destroy'
  # get '/index'
  # get 'fyrb_utility_functions/show'
  # get 'fyrb_utility_functions/create'
  # get 'fyrb_utility_functions/update'
  # get 'fyrb_utility_functions/destroy'
  

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

  resources :fyrb_graphic_symbols
  resources :fyrb_surprising_links
  resources :fyrb_code_snippets
  resources :fyrb_utility_functions
  
  resources :fyrb_object_inspectors

  get '/*a', to: 'fyrb_auths#not_found'
end
