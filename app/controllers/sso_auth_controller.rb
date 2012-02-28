class SsoAuthController < ApplicationController
  include SSOClientControllerMethods
  skip_before_filter :sso_validate_st
  
  def login
  end
end
