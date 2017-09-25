class AddChartAxes < ActiveRecord::Migration[5.1]
  def change
    change_table :charts do |t|
      t.string :x_axis, null: false
      t.string :y_axis, null: false
    end
  end
end
