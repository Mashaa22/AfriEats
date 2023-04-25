class MealsSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image_url

  has_many :order
  belongs_to :menuoption
end
