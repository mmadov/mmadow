class AddTemplatesIdToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :template_id, :string
  end
end
