class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :chef_url, :chef_quote, :chef_name
  has_many :menuoptions
  belongs_to :admin
end
