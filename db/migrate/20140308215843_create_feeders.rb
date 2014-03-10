class CreateFeeders < ActiveRecord::Migration
  def change
    create_table :feeders do |t|
      t.string :name
      t.string :device_id
      t.string :api_token
      t.integer :created_by
      t.integer :updated_by
      t.timestamps
    end
  end
end
