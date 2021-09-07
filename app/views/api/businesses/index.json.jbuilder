@businesses.each do |business|
    json.set! business.id do 
        json.partial! 'business', business: business
        json.reviews do 
            json.array! business.reviews do |review|
                json.extract! review, :id, :body, :stars
            end
        end
    end
end