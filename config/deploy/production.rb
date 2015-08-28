# PRODUCTION CONFIGURATION

# Servers and their roles.
server 'interactive.crabfarm.io', user: 'deploy', roles: %w{web app db}, my_property: :my_value

# Web server configuration
set :nginx_domains, 'interactive.crabfarm.io'
# set :nginx_redirected_domains, ""

# Source
set :branch,        'master'    # Optional, defaults to master

# Rails configuration
# set :rails_env,   'production'

# Eye monitoring notifications
# set :eye_notification_contact, :dev_team      # Optional, defaults to :monitor
# set :eye_notification_level, :info            # Optional, defaults to :error

