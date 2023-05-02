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
  get '/logged_in', to: 'application#logged_in?'
  post '/auto_login', to: 'auths#auto_login'
  get '/auto_login', to: 'auths#auto_login'

  get '/admin_orders', to: 'orders#admin_orders'


end
