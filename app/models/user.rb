class User < ApplicationRecord
    has_secure_password
    has_many :orders

    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }
end
