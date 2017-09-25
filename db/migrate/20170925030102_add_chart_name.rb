class AddChartName < ActiveRecord::Migration[5.1]
  def change
    change_table :charts do |t|
      t.string :name, null: false
    end
    add_index :charts, [:owner_id, :name], unique: true
  end
end
