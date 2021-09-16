json.partial! 'api/businesses/business', business: @business
json.reviews do 
    json.array! @business.reviews do |review|
        json.extract! review, :id, :body, :stars, :longitude, :latitude, :city, :state
    end
end

json.photoUrls @business.photos.map { |photo| url_for(photo) }