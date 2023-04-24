Rails.application.routes.draw do
  resources :menuoptions
  resources :restaurants
  resources :meals
  resources :orders
  resources :admins
  resources :users

  post '/user/signup', to: 'users#create'
  post '/admin/signup', to: 'admins#create'
  post '/login', to: 'auths#create'
  delete '/logout', to: 'auths#destroy'

end
