class RestaurantSerializer < ActiveModel::Serializer
    attributes :id, :name, :image_url, :chef_url, :chef_quote, :chef_name
  end
  