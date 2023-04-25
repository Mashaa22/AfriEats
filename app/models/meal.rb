class Meal < ApplicationRecord
  has_many :orders
  
  belongs_to :menuoption
  belongs_to :restaurant
end

