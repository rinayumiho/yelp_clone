class BusinessHour < ApplicationRecord
    validates :business_id, :monday_hour, :tuesday_hour, :wednesday_hour, :thursday_hour, :friday_hour, :saturday_hour, :sunday_hour, presence: true

    belongs_to :business,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Business
end
