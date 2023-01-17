class CreateUser < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :address
      t.string :password_digest
      t.string :phone_number
      t.bigint :role_id
      t.datetime :reset_password_sent_at
      t.string :reset_pass 
      t.datetime :remember_created_at
      t.timestamps
    end
  end
end
