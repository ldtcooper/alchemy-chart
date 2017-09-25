class AddYAxis2 < ActiveRecord::Migration[5.1]
  def change
    rename_column :charts, :y_axis, :y_axis1
    change_table :charts do |t|
      t.string :y_axis2
    end
  end
end
