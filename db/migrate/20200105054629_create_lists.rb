class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.string :title
      t.text :description
      t.date :date
      t.string :tags
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
