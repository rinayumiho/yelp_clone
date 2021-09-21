class Api::BusinessesController < ApplicationController

    def show 
        @business = Business.with_attached_photos.find_by(id: params[:id])
    end

    def index 
        if params[:query]
            @businesses = Business.all.select{ |ele| ele.name.downcase.include?(params[:query].downcase) }
        else
            @businesses = Business.all
        end
        render :index
    end

    private

    def business_params
        params.require(:business).permit(:name, :website, :phone, :address, :longitude, :latitude, :city, :state, photos: [])
    end
end