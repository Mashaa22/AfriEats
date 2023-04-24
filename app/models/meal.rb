class Meal < ApplicationRecord
  has_many :orders
  belongs_to :restaurant
  belongs_to :menu_option
end
