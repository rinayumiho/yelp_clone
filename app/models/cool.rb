class Cool < ApplicationRecord
    validates :user_id, :review_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :review,
        primary_key: :id,
        foreign_key: :review_id,
        class_name: :Review
end
