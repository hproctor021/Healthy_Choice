class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :image
      t.string :name
      t.float :price
      t.string :category
      t.integer :calories
      t.integer :quantity_remaining

      t.timestamps
    end
  end
end
