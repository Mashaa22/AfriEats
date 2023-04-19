class Menuoption < ApplicationRecord
  has_many :meals
  
  belongs_to :restaurant
end
