class OrderSerializer < ActiveModel::Serializer
    attributes :id, :status, :address, :date_of_delivery, :quantity, :price
  end
  