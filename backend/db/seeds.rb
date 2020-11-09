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
    {name: 'Tom Lai', password: 't123', email: 'supertom888@gmail.com', phone_number: '281-330-8004'},
    {name: 'Haley Proctor', password: 't123', email: 'haleyp33@gmail.com', phone_number: '512-330-8005'},
    {name: 'Bob Siegel', password: 't123', email: 'bobbyc@gmail.com', phone_number: '562-330-8006'},
    {name: 'Devin Lonetree', password: 't123', email: 'jdlonetree@gmail.com', phone_number: '901-330-8007'}
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
    {image: 'https://target.scene7.com/is/image/Target/GUEST_89b6c7f4-bd10-4950-a03d-e8d2538c3e0c?fmt=webp&wid=1400&qlt=80', name: 'Apple' , price: 3.99, category: 'fruit', calories: 95, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_6d9d5f9f-7206-49c4-a381-6ba5a0c08504?fmt=webp&wid=1400&qlt=80', name: 'Avocado', price: 0.68, category: 'fruit', calories: 320, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?fmt=webp&wid=1400&qlt=80', name: 'Banana', price: 0.19, category: 'fruit', calories: 111, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_25e44c47-409d-46d7-a19c-e797e5a82542?fmt=webp&wid=1400&qlt=80', name: 'Blueberries', price: 4.50, category: 'fruit', calories: 84, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_9cfb2e49-18c4-41bc-a66a-7dd1ac51f5a4?fmt=webp&wid=1400&qlt=80', name: 'Grapes', price: 4.99, category: 'fruit', calories: 104, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_980fa0ba-1c22-41a9-af1d-77ba2b07cdce?fmt=webp&wid=1400&qlt=80', name: 'Kiwi', price: 3.99, category: 'fruit', calories: 112, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_2a6eed58-0050-498c-874f-b7c0b95d7139?fmt=webp&wid=1400&qlt=80', name: 'Mango', price: 1.49, category: 'fruit', calories: 202, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_2b66b929-ed6f-4d1a-96de-d96dadcd4c42?fmt=webp&wid=1400&qlt=80', name: 'Orange', price: 1.79, category: 'fruit', calories: 62, quantity_remaining: 20},
    {image: 'https://www.thesprucepets.com/thmb/yqfbDM9pihuXvMABucXIX-IW2yQ=/1885x1414/smart/filters:no_upscale()/Yellow-Peaches-576cd8bc5f9b585875fdb6e9.jpg', name: 'Peach', price: 2.99, category: 'fruit', calories: 59, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_96784005-9edf-4c7d-9187-b7766a6f1671?fmt=webp&wid=1400&qlt=80', name: 'Strawberries', price: 3.72, category: 'fruit', calories: 49, quantity_remaining: 20},

    {image: 'https://target.scene7.com/is/image/Target/GUEST_f07a3757-32f4-41e8-aeec-d2205132d995?fmt=webp&wid=1400&qlt=80', name: 'Asparagus', price: 2.48, category: 'vegetable', calories: 20, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_f473ac58-65ee-4baf-bd0d-3b7eaf25a2b4?fmt=webp&wid=1400&qlt=80', name: 'Broccoli', price: 2.44, category: 'vegetable', calories: 21, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_6d211b73-c9e8-4472-9130-4d159f73977c?fmt=webp&wid=1400&qlt=80', name: 'Brussels Sprouts', price: 3.99, category: 'vegetable', calories: 30, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_3b0594d0-878b-4744-b9a8-32c45d2bf436?fmt=webp&wid=1400&qlt=80', name: 'Cabbage', price: 1.75, category: 'vegetable', calories: 11, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_7edf66d0-8f08-4c9e-8bf5-0996578bf009?fmt=webp&wid=1400&qlt=80', name: 'Cucumber', price: 2.39, category: 'vegetable', calories: 7, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_9b78add9-61f2-42b7-8547-1dc7779a7c87?fmt=webp&wid=1400&qlt=80', name: 'Green Beans', price: 2.59, category: 'vegetable', calories: 17, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_a4c0a3d8-3df3-40f9-930f-d0dc1bff79d0?fmt=webp&wid=1400&qlt=80', name: 'Kale', price: 2.99, category: 'vegetable', calories: 11, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_d1f0488f-4659-4164-8c2e-52a0b8abe23e?fmt=webp&wid=1400&qlt=80', name: 'Lettuce', price: 2.96, category: 'vegetable', calories: 8, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_5e3f1d0c-5633-4e60-b15c-d663e9c4d22f?fmt=webp&wid=1400&qlt=80', name: 'Peppers', price: 3.30, category: 'vegetable', calories: 18, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_03aeb398-84b4-409b-ae84-6fb0831768c3?fmt=webp&wid=1400&qlt=80', name: 'Spinach', price: 1.99, category: 'vegetable', calories: 21, quantity_remaining: 20},

    {image: 'https://images.heb.com/is/image/HEBGrocery/000397586', name: 'Medium Firm Tofu', price: 2.51, category: 'meat', calories: 90, quantity_remaining: 20},
    {image: 'https://target.scene7.com/is/image/Target/GUEST_3683fd09-8a30-4adc-83e1-d25ccacff95a?fmt=webp&wid=1400&qlt=80', name: 'Chicken Thighs', price: 8.99, category: 'meat', calories: 160, quantity_remaining: 20},
    {image: 'https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d5418756-2891-44f8-8578-4c5aafa2c55d.jpeg', name: 'Lamb Rack', price: 14.99, category: 'meat', calories: 190, quantity_remaining: 20},
    {image: 'https://i5.walmartimages.com/asr/09a0ba45-dd79-4b7c-8e58-d91e74ed8b49_1.da8bc8ad3c2b77aa43cf6de4eb389199.png?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff', name: 'Duck Legs', price: 16.99, category: 'meat', calories: 150, quantity_remaining: 20},
    {image: 'https://www.freshdirect.com/media/images/product/meat_2/mea_pid_3330079_z.jpg?lastModify=2014-07-09', name: 'Rib Eye Steak', price: 17.99, category: 'meat', calories: 170, quantity_remaining: 20},
    {image: 'https://i5.walmartimages.com/asr/7e2204d6-8f48-46f6-82a2-a2f25106472f.24ba50dabe64a4dafa996a507114f28b.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff', name: 'Ground Turkey', price: 5.13, category: 'meat', calories: 140, quantity_remaining: 20},
    {image: 'https://images.heb.com/is/image/HEBGrocery/000893296', name: 'Fresh Shrimp', price: 12.33, category: 'meat', calories: 99, quantity_remaining: 20},
    {image: 'https://images.heb.com/is/image/HEBGrocery/000373352', name: 'Fresh Sea Scallops', price: 20.57, category: 'meat', calories: 90, quantity_remaining: 20},
    {image: 'https://images.heb.com/is/image/HEBGrocery/000373324', name: 'Fresh American Snapper', price: 38.45, category: 'meat', calories: 275, quantity_remaining: 20},
    {image: 'https://images.heb.com/is/image/HEBGrocery/000373464', name: 'Wild Caught Dungeness Crab', price: 14.39, category: 'meat', calories: 73, quantity_remaining: 20},

    {image: 'https://images.heb.com/is/image/HEBGrocery/000714263', name: 'Limeade', price: 2.41, category: 'drink', calories: 129, quantity_remaining: 20},
    {image: 'https://images.heb.com/is/image/HEBGrocery/001828129', name: 'Fresh Orange Juice', price: 8.22, category: 'drink', calories: 130, quantity_remaining: 20},
    {image: 'https://images.heb.com/is/image/HEBGrocery/000533893', name: 'Topo Chico', price: 8.64, category: 'drink', calories: 0, quantity_remaining: 20},
    {image: 'https://images.heb.com/is/image/HEBGrocery/000716177', name: 'Valley of the Moon Pinot Noir', price: 20.58, category: 'drink', calories: 110, quantity_remaining: 20},
    {image: 'https://images.heb.com/is/image/HEBGrocery/002222199', name: 'LaMarca prosecco', price: 13.37, category: 'drink', calories: 90, quantity_remaining: 20},
    {image: 'https://images.heb.com/is/image/HEBGrocery/001878912', name: 'Kolsch Style Blone', price: 8.44, category: 'drink', calories: 130, quantity_remaining: 20},
    {image: 'https://images.heb.com/is/image/HEBGrocery/000220949', name: 'Shiner Holiday Cheer', price: 8.21, category: 'drink', calories: 140, quantity_remaining: 20}
]

items.each {| item | Item.create(item)}

shopping_list_items = [
    {shopping_list_id: ShoppingList.first.id, item_id: Item.second.id},
    {shopping_list_id: ShoppingList.first.id, item_id: Item.all[5].id},
    {shopping_list_id: ShoppingList.first.id, item_id: Item.all[10].id},
    {shopping_list_id: ShoppingList.second.id, item_id: Item.third.id},
    {shopping_list_id: ShoppingList.second.id, item_id: Item.all[34].id},
    {shopping_list_id: ShoppingList.third.id, item_id: Item.all[35].id},
    {shopping_list_id: ShoppingList.third.id, item_id: Item.first.id},
    {shopping_list_id: ShoppingList.third.id, item_id: Item.all[22].id},
    {shopping_list_id: ShoppingList.third.id, item_id: Item.all[27].id},
    {shopping_list_id: ShoppingList.fourth.id, item_id: Item.fourth.id},
    {shopping_list_id: ShoppingList.fourth.id, item_id: Item.all[9].id},
    {shopping_list_id: ShoppingList.fourth.id, item_id: Item.all[16].id}
]

shopping_list_items.each {| li | ShoppingListItem.create(li)}