class CreateFunnies < ActiveRecord::Migration[5.2]
  def change
    create_table :funnies do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false
      t.timestamps
    end

    add_index :funnies, :user_id
    add_index :funnies, :review_id
  end
end
