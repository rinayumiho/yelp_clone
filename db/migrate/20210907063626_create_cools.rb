class CreateCools < ActiveRecord::Migration[5.2]
  def change
    create_table :cools do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false
      t.timestamps
    end
    add_index :cools, :user_id
    add_index :cools, :review_id
  end
end
