class Restaurant < ApplicationRecord
  has_many :meals, dependent: :destroy
  has_many :menuoptions, dependent: :destroy
  belongs_to :admin
end
