class CreateShoppingLists < ActiveRecord::Migration[6.0]
  def change
    create_table :shopping_lists do |t|
      t.integer :user_id
      t.float :total_price

      t.timestamps
    end
  end
end
