Rails.application.routes.draw do
  get 'new', as: 'new', to: 'games#new'
  get 'score', as: 'score', to: 'games#score'
  post 'score', to: 'games#score'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
