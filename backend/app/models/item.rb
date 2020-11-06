class Item < ApplicationRecord
    has_many :shopping_list_items
    has_many :shopping_lists, through: :shopping_list_items
end
