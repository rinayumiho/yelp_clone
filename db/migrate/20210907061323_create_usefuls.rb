class CreateUsefuls < ActiveRecord::Migration[5.2]
  def change
    create_table :usefuls do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false
      t.timestamps
    end

    add_index :usefuls, :user_id
    add_index :usefuls, :review_id
  end
end
