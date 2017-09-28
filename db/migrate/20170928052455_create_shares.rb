class CreateShares < ActiveRecord::Migration[5.1]
  def change
    create_table :shares do |t|
      t.integer :chart_id, null: false
      t.integer :sharee_id, null: false
      t.timestamps
    end
    add_index :shares, :chart_id
    add_index :shares, :sharee_id
  end
end
