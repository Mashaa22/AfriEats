class Meal < ApplicationRecord
  # has_many :orders, dependent: :destroy
  belongs_to :menuoption
  
end

