class Menuoption < ApplicationRecord
  has_many :meals, dependent: :destroy
  belongs_to :restaurant
end
