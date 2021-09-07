class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :website, null: false
      t.string :phone, null: false
      t.string :address, null: false

      t.timestamps
    end

    add_index :businesses, :name
  end
end
