class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image_url
  has_one :restaurant
  has_one :menu_options
end
