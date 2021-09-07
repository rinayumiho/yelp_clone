class CreateBusinessHours < ActiveRecord::Migration[5.2]
  def change
    create_table :business_hours do |t|
      t.integer :business_id, null: false
      t.string :monday_hour, null: false
      t.string :tuesday_hour, null: false
      t.string :wednesday_hour, null: false
      t.string :thursday_hour, null: false
      t.string :friday_hour, null: false
      t.string :saturday_hour, null: false
      t.string :sunday_hour, null: false
      t.timestamps
    end

    add_index :business_hours, :business_id, unique: true
  end
end
