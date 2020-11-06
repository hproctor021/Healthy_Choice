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
    {image: 'https://www.shutterstock.com/image-photo/ripe-red-apple-fruit-half-green-699645961', name: 'Apple' , price: 3.99, category: 'fruit', calories: 95, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/delicious-fresh-avocado-fruit-isolated-on-white-background-gm1027572462-275493327', name: 'Avocado', price: 0.68, category: 'fruit', calories: 320, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/banana-gm157375066-6905126', name: 'Banana', price: 0.19, category: 'fruit', calories: 111, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/blueberry-isolated-on-white-background-gm853493518-140246543', name: 'Blueberries', price: 4.50, category: 'fruit', calories: 84, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/grapes-red-grape-grape-branch-isolated-on-white-gm1158975684-316753963', name: 'Grapes', price: 4.99, category: 'fruit', calories: 104, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/whole-kiwi-fruit-and-half-kiwi-fruit-on-white-gm834807852-135717827', name: 'Kiwi', price: 3.99, category: 'fruit', calories: 112, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/whole-and-slice-ripe-mango-fruit-with-green-leaves-isolated-on-white-background-gm1008183290-271953419', name: 'Mango', price: 1.49, category: 'fruit', calories: 202, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/orange-fruits-with-slice-gm924858708-253809149', name: 'Orange', price: 1.79, category: 'fruit', calories: 62, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/peach-with-slice-and-leaf-isolated-on-white-gm828941520-134802273', name: 'Peach', price: 2.99, category: 'fruit', calories: 59, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/strawberry-with-sliced-half-isolated-on-white-background-gm876503894-244635208', name: 'Strawberries', price: 3.72, category: 'fruit', calories: 49, quantity_remaining: 20},

    {image: 'https://www.istockphoto.com/photo/green-asparagus-sticks-gm1084123600-290865967', name: 'Asparagus', price: 2.48, category: 'vegetable', calories: 20, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/fresh-broccoli-isolated-on-white-background-gm905351392-249638309', name: 'Broccoli', price: 2.44, category: 'vegetable', calories: 21, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/sprouts-gm183537075-14863809', name: 'Brussels Sprouts', price: 3.99, category: 'vegetable', calories: 30, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/green-cabbage-isolated-on-white-background-gm624925456-109946393', name: 'Cabbage', price: 1.75, category: 'vegetable', calories: 11, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/cucumber-slices-on-a-white-background-gm91516166-8880159', name: 'Cucumber', price: 2.39, category: 'vegetable', calories: 7, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/fresh-beans-gm182035936-19401629', name: 'Green Beans', price: 2.59, category: 'vegetable', calories: 17, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/kale-gm135091129-8076023', name: 'Kale', price: 2.99, category: 'vegetable', calories: 11, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/lettuce-isolated-isolated-on-white-background-gm181072765-25083887', name: 'Lettuce', price: 2.96, category: 'vegetable', calories: 8, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/colorful-peppers-gm153564958-17345991', name: 'Peppers', price: 3.30, category: 'vegetable', calories: 18, quantity_remaining: 20},
    {image: 'https://www.istockphoto.com/photo/spinach-gm169983791-19611296', name: 'Spinach', price: 1.99, category: 'vegetable', calories: 21, quantity_remaining: 20},

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