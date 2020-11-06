# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
ShoppingList.delete_all
ShoppingListItem.delete_all
Item.delete_all


users = [
    {name: 'Tom Lai', password: 't123', email: 'supertom888@gmail.com', phone_number: 2813308004},
    {name: 'Haley Proctor', password: 't123', email: 'haleyp33@gmail.com', phone_number: 5123308005},
    {name: 'Bob Siegel', password: 't123', email: 'supertom888@gmail.com', phone_number: 5623308006},
    {name: 'Devin Lonetree', password: 't123', email: 'supertom888@gmail.com', phone_number: 9013308007}
]

users.each {| user | User.create(user)}

shopping_lists = [
    {user_id: User.first.id, total_price: 0.0},
    {user_id: User.second.id, total_price: 0.0},
    {user_id: User.third.id, total_price: 0.0},
    {user_id: User.fourth.id, total_price: 0.0}
]

shopping_lists.each {| list | ShoppingList.create(list)}

items = [
    {image: , name: , price: , category: fruit, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: fruit, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: fruit, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: fruit, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: fruit, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: fruit, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: fruit, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: fruit, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: fruit, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: fruit, calories: , quantity_remaining: 20},

    {image: , name: , price: , category: vegetable, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: vegetable, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: vegetable, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: vegetable, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: vegetable, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: vegetable, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: vegetable, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: vegetable, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: vegetable, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: vegetable, calories: , quantity_remaining: 20},

    {image: 'https://target.scene7.com/is/image/Target/GUEST_ff23a29e-13c6-49a8-bc6a-8b09529a2642?fmt=webp&wid=1400&qlt=80', name: 'Chicken Breasts', price: 12.99, category: meat, calories: 140, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_3683fd09-8a30-4adc-83e1-d25ccacff95a?fmt=webp&wid=1400&qlt=80', name: 'Chicken Thighs', price: 8.99, category: meat, calories: 160, quantity_remaining: 20},
    {image: 'https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d5418756-2891-44f8-8578-4c5aafa2c55d.jpeg', name: 'Lamb Rack', price: 14.99, category: meat, calories: 190, quantity_remaining: 20},
    {image: , name: , price: , category: meat, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: meat, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: meat, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: meat, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: meat, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: meat, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: meat, calories: , quantity_remaining: 20},

    {image: , name: , price: , category: drink, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: drink, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: drink, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: drink, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: drink, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: drink, calories: , quantity_remaining: 20},
    {image: , name: , price: , category: drink, calories: , quantity_remaining: 20}
]

items.each {| item | Item.create(item)}

shopping_list_items = [
    {shopping_list_id: ShoppingList.first.id, item_id: Item.second.id},
    {shopping_list_id: ShoppingList.first.id, item_id: Item.all[5].id},
    {shopping_list_id: ShoppingList.first.id, item_id: Item.all[10].id},
    {shopping_list_id: ShoppingList.second.id, item_id: Item.third.id},
    {shopping_list_id: ShoppingList.second.id, item_id: Item.all[34].id},
    {shopping_list_id: ShoppingList.third.id, item_id: Item.all[37].id},
    {shopping_list_id: ShoppingList.third.id, item_id: Item.first.id},
    {shopping_list_id: ShoppingList.third.id, item_id: Item.all[22].id},
    {shopping_list_id: ShoppingList.third.id, item_id: Item.all[27].id},
    {shopping_list_id: ShoppingList.fourth.id, item_id: Item.fourth.id},
    {shopping_list_id: ShoppingList.fourth.id, item_id: Item.all[9].id},
    {shopping_list_id: ShoppingList.fourth.id, item_id: Item.all[16].id}
]

shopping_list_items.each {| li | ShoppingListItem.create(li)}