class Business < ApplicationRecord
    validates :name, :website, :phone, :address, :longitude, :latitude, :city, :state, presence: true
    has_many_attached :photos

    has_many :reviews,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Review,
        dependent: :destroy

    has_many :business_hours,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :BusinessHour,
        dependent: :destroy
    
    has_many :saves,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Save,
        dependent: :destroy
end
