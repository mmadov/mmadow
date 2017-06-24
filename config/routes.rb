Rails.application.routes.draw do
  resources :categories
  resources :shops
  mount RailsAdmin::Engine => '/adm', as: 'rails_admin'
  resources :templates
  root 'home#index' 
  get '/templates/views/:id', to: 'templates#view'
  get '/about', to: 'about#index'
  get '/service', to: 'about#service'
end
