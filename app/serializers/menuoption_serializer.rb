class MenuoptionSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image_url
  has_one :restaurant
end
