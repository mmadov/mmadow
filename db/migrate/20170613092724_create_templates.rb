class CreateTemplates < ActiveRecord::Migration[5.0]
  def change
    create_table :templates do |t|
      t.string :name
      t.integer :cat_id
      t.text :desc
      t.string :image
      t.string :price
      t.string :url

      t.timestamps
    end
  end
end
