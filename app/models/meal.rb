class Meal < ApplicationRecord
  has_many :meals
  has_many :menu_options

  belongs_to :restaurant
  belongs_to :menu_options
end
