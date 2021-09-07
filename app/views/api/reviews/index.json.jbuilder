@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :body, :user_id, :business_id, :stars
    end
end