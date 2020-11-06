class User < ApplicationRecord
    has_many :shopping_lists
    has_many :shopping_list_items, through: :shopping_lists
end
