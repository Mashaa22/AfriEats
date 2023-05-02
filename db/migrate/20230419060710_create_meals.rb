class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.references :menuoption, null: false, foreign_key: { on_delete: :cascade }
      t.string :name
      t.integer :price
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
