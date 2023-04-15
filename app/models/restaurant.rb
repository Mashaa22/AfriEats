class Restaurant < ApplicationRecord
  has_many :meals
  has_many :menu_options
  
  belongs_to :admin
end
