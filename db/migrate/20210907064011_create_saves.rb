class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.timestamps
    end
    add_index :saves, :user_id
    add_index :saves, :business_id
  end
end
