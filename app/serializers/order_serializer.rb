class OrderSerializer < ActiveModel::Serializer
  attributes :id, :name, :status, :address, :date_of_delivery, :quantity, :price
  belongs_to :user
  belongs_to :restaurant
end
