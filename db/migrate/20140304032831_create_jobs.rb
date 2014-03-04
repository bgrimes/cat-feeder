class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.integer :auth_user_id
      t.string :name
      t.time :run_at
      t.datetime :last_run
      t.timestamps
    end
    add_index :jobs, :auth_user_id
  end
end
