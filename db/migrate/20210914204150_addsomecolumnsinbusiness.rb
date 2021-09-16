class Addsomecolumnsinbusiness < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :longitude, :float
    add_column :businesses, :latitude, :float
    add_column :businesses, :city, :string
    add_column :businesses, :state, :string
    # change_column_null :businesses, :longitude, false
    # change_column_null :businesses, :latitude, false
    # change_column_null :businesses, :city, false
    # change_column_null :businesses, :state, false
    add_index :businesses, :city
    add_index :businesses, :state
  end
end
