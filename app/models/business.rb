class Business < ApplicationRecord
    validates :name, :website, :phone, :address, presence: true

    has_many :reviews,
        primary_key: :id,
        foreign_key: :businesses,
        class_name: :Review

    has_one :business_hour,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :BusinessHour
    
    has_many :saves,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Save
end
