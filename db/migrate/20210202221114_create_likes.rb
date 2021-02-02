class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :likable_id
      t.string :likable_type

      t.timestamps
    end
    add_index :likes, [:likable_id, :likable_type]
  end
end
