class Admin < ApplicationRecord
    has_secure_password
    has_many :restaurants, dependent: :destroy

    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }
  end
  
