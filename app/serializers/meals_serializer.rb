class MealsSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image_url
  belongs_to :menuoption

  def restaurant
    object.menuoption.restaurant if object.menuoption.present?
  end

  def attributes(*args)
    hash = super
    hash[:restaurant] = restaurant
    hash
  end
end

