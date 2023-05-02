class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.references :restaurant, null: false, foreign_key: true
      t.string :name
      t.string :status
      t.string :address
      t.text :date_of_delivery
      t.integer :quantity
      t.integer :price

      t.timestamps
    end
  end
end
