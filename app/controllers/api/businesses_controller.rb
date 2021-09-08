class Api::BusinessesController < ApplicationController

    def show 
        @business = Business.find_by(id: params[:id])
    end

    def index 
        if params[:query]
            @businesses = Business.all.select{ |ele| ele.name.include?(params[:query]) }
        else
            @businesses = Business.all
        end
        render :index
    end

    private

    def business_params
        params.require(:business).permit(:name, :website, :phone, :address)
    end
end