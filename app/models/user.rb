class User < ApplicationRecord
    validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 8}, allow_nil: true

    has_many :reviews,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User,
        dependent: :destroy

    has_many :usefuls,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Useful,
        dependent: :destroy

    has_many :funnies,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Funny,
        dependent: :destroy

    has_many :cools,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Cool,
        dependent: :destroy

    has_many :saves,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Save,
        dependent: :destroy

    attr_reader :password 
    
    after_initialize :ensure_session_token 

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    private 

    def ensure_session_token 
        self.session_token ||= self.class.generate_session_token
    end

end
