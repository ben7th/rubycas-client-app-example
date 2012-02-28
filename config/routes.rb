AppOne::Application.routes.draw do
  root :to => 'index#index'
  
  get '/login'              => 'sso_auth#login'
  
  get '/ajax_login_failure' => 'sso_auth#ajax_login_failure'
  get '/crosslogin'         => 'sso_auth#crosslogin'
  get '/ajax_login_success' => 'sso_auth#ajax_login_success'
  get '/crosslogout'        => 'sso_auth#crosslogout'
  
end
