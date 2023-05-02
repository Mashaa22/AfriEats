class MenuoptionSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :restaurant_id, :name, :price, :description, :image_url
  belongs_to :restaurant
  has_many :meals, dependent: :destroy
  
  def image_url
    if object.image_url.attached?
      {
        url: rails_blob_url(object.image_url, host: 'localhost:3000')
      }
    end
  end
end