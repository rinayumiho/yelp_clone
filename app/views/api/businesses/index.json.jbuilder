@businesses.each do |business|
    json.set! business.id do 
        json.partial! 'business', business: business
        json.reviews do 
            json.array! business.reviews do |review|
                json.extract! review, :id, :body, :stars
            end
        end
        json.business_hours do 
            json.array! business.business_hours do |business_hour|
                json.extract! business_hour, :id, :business_id, :monday_hour, :tuesday_hour, :wednesday_hour, :thursday_hour, :friday_hour, :saturday_hour, :sunday_hour
            end
        end
        json.photoUrls business.photos.map { |photo| url_for(photo) }
    end
end