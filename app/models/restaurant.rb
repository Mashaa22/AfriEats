class Restaurant < ApplicationRecord
  has_many :meals
  has_many :menuoptions
  
  belongs_to :admin
end
