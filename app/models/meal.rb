class Meal < ApplicationRecord
  belongs_to :restaurant
  belongs_to :menu_options
end
