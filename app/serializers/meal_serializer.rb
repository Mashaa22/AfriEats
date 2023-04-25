class MealsSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image_url
end
