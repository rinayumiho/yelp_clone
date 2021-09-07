class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]

    def create 
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render api_users_url
        else
            render json: ['Invalid email or password'], status: 401   
        end
    end

    def destroy 
        logout!
        render json: ['Successfully logged out']
    end
end