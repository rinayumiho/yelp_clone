class AddMoreColumnsToBusiness < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :price, :integer
    add_column :businesses, :categories, :string
    add_column :businesses, :claimed, :boolean
  end
end
