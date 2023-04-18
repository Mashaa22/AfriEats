class Order < ApplicationRecord
  belongs_to :user
  belongs_to :menu
  belongs_to :meals
end
