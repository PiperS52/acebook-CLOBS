class Post < ApplicationRecord
    has_many :user, foreign_key: "user_id", class_name: "User"
end
