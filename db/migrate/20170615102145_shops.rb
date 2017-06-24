class Shops < ActiveRecord::Migration[5.0]
  def up
    drop_table :shops
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
