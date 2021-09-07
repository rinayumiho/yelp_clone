class Api::BusinessesController < ApplicationController

    def show 
        @business = Business.find_by(id: params[:id])
    end

    def index 
        # write code here!!!
        render :index
    end

    private

    def business_params
        params.require(:business).permit(:name, :website, :phone, :address)
    end
end