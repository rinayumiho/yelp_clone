class Business < ApplicationRecord
    validates :name, :website, :phone, :address, presence: true

    has_many :reviews,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Review,
        dependent: :destroy

    has_one :business_hour,
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
