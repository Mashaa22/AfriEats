class Meal < ApplicationRecord
  has_many :order
  belongs_to :menuoption
end

