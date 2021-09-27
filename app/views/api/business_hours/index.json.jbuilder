@business_hours do |business_hour|
    json.set! business_hour.id do 
        json.extract! business_hour, :id, :business_id, :monday_hour, :tuesday_hour, :wednesday_hour, :thursday_hour, :friday_hour, :saturday_hour, :sunday_hour
    end
end