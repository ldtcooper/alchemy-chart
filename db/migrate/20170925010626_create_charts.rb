class CreateCharts < ActiveRecord::Migration[5.1]
  def change
    create_table :charts do |t|
      t.integer :owner_id, null: false
      t.integer :dataset_id, null: false
      t.string :chart_type, null: false
      t.string :chart_sort, null: false
      t.timestamps
    end
    add_index :charts, :owner_id
    add_index :charts, :dataset_id
  end
end
