Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.

  delete '/sessions' => 'sessions#destroy'
  get   '/sessions/new'  => 'sessions#new'
  post   '/sessions'  => 'sessions#create'
  get '/nearby_musicians' => 'musicians#nearby_musicians'
  get '/musicians/show_me' => "musicians#show_me"



  root 'welcome#index'

  resources :musicians

  post '/musicians/set_location' => 'musicians#set_location'

end
