Rails.application.routes.draw do
  # get 'fyrb_useful_operations/index'
  # get 'fyrb_useful_operations/show'
  # get 'fyrb_useful_operations/create'
  # get 'fyrb_useful_operations/update'
  # get 'fyrb_useful_operations/destroy'
  # get 'fyrb_managed_assets/index'
  # get 'fyrb_managed_assets/show'
  # get 'fyrb_managed_assets/create'
  # get 'fyrb_managed_assets/update'
  # get 'fyrb_managed_assets/destroy'
  # get 'fyrb_answer_steps/index'
  # get 'fyrb_answer_steps/show'
  # get 'fyrb_answer_steps/create'
  # get 'fyrb_answer_steps/update'
  # get 'fyrb_answer_steps/destroy'
  # get 'fyrb_answer_sheets/index'
  # get 'fyrb_answer_sheets/show'
  # get 'fyrb_answer_sheets/create'
  # get 'fyrb_answer_sheets/update'
  # get 'fyrb_answer_sheets/destroy'

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
  resources :fyrb_related_methods
  resources :fyrb_answer_sheets
  resources :fyrb_answer_steps
  resources :fyrb_managed_assets
  resources :fyrb_useful_operations

  get '/*a', to: 'fyrb_auths#not_found'
end
