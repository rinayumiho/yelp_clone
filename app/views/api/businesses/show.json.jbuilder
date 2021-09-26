json.partial! 'api/businesses/business', business: @business
json.reviews do 
    json.array! @business.reviews do |review|
        json.extract! review, :id, :body, :stars
    end
end

json.business_hours do
    business_hour = business_hours[0]
    json.extract! business_hour, :id, :business_id, :monday_hour, :tuesday_hour, :wednesday_hour, :thursday_hour, :friday_hour, :saturday_hour, :sunday_hour
end

json.photoUrls @business.photos.map { |photo| url_for(photo) }