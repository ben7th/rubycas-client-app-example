class ApplicationController < ActionController::Base
  protect_from_forgery
  
  include SSOAuthenticatedSystem
  def _this_app_name; 'pophour'; end
  before_filter :sso_validate_st
  
end
