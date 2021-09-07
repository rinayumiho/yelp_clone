json.partial! 'api/businesses/business', business: @business
json.reviews do 
    json.array! @business.reviews do |review|
        json.extract! review, :id, :body, :stars
    end
end