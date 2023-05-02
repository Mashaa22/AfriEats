class Menuoption < ApplicationRecord
  has_many :meals, dependent: :destroy
  belongs_to :restaurant

  has_one_attached :image_url
end
