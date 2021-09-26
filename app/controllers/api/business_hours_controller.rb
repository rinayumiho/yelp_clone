class Api::BusinessHoursController < ApplicationController
    def index 
        @business_hours = BusinessHour.all.where(business_id: params[:business_id])
        render :index
    end
end