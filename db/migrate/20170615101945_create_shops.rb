class CreateShops < ActiveRecord::Migration[5.0]
  def change
    create_table :shops do |t|
      t.string :name
      t.string :lname
      t.string :phone
      t.string :company
      t.string :email
      t.integer :temp_id

      t.timestamps
    end
  end
end
