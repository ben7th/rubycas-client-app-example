class User < ActiveRecord::Base
  include UserAuthMethods
  establish_connection({
    :adapter=>'mysql2',
    :database=>'user_auth_development',
    :username=>'root',
    :password=>'root',
    :host=>'localhost',
    :reconnect=>true
  })
end