class CreateApiDatasets < ActiveRecord::Migration[5.1]
  def change
    drop_table :datasets
    create_table :datasets do |t|
      t.integer :owner_id, null: false
      t.string :dataset_name, null: false
      t.string :data_type, null: false
      t.jsonb :data_text, null: false
      t.timestamps
    end
    add_index :datasets, :owner_id
    add_index :datasets, [:dataset_name, :owner_id], unique: true
  end
end
