class User < ApplicationRecord

has_secure_password
validates :name,:password,:email,:phone_number, presence: true
end