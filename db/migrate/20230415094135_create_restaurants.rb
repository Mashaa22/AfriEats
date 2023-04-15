class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.references :admin, null: false, foreign_key: true
      t.string :name
      t.string :image_url
      t.string :chef_url
      t.string :chef_quote
      t.string :chef_name

      t.timestamps
    end
  end
end
