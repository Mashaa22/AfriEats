class CreateMenuoptions < ActiveRecord::Migration[7.0]
  def change
    create_table :menuoptions do |t|
      t.references :restaurant, null: false, foreign_key: true
      t.string :name
      t.integer :price
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
