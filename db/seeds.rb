puts '👥 Seeding Users...'
User.create([
    {
        username: 'mercienyambura',
        email: 'mercienyambura@gmail.com',
        password_digest: 'mercienyambura',
        image: '',
    },
    {
        username: 'alexmaranga',
        email: 'alexmaranga@gmail.com',
        password_digest: 'alexmaranga',
        image: '',
    },
    {
        username: 'marksangiriaki',
        email: 'marksangiriaki@gmail.com',
        password_digest: 'marksangiriaki',
        image: '',
    },
    {
        username: 'mariamali',
        email: 'mariamali@gmail.com',
        password_digest: 'mariamali',
        image: '',
    },
    {
        username: 'daisyjebiwot',
        email: 'daisyjebiwot@gmail.com',
        password_digest: 'daisyjebiwot',
        image: '',
    },
    {
        username: 'abelmuriithi',
        email: 'abelmuriithi@gmai.com',
        password_digest: 'abelmuriithi',
        image: ''
    }
])

# puts '🍔  Seeding Menuoptions...'
# Menuoption.create!([
#     {
#         # restaurant_id: 1,
#         # menuoptions_id: 1,
#         name: '1 Chicken and Crispy Deal',
#         price: 250,
#         description: '1 Chicken piece served either in Original Recipe or Hot and Crispy',
#         image_url: 'https://ontabee.s3.amazonaws.com/kfc-kenya/item/BWrIQuXPbaeAZCoJ.jpg',
#     },
#     {
#         # restaurant_id: 1,
#         # menuoptions_id: 2,
#         name: '9 Chicken Pieces Crispy Deal',
#         price: 1950,
#         description: '9 Chicken pieces served either in Original Recipe or Hot and Crispy',
#         image_url: 'https://ontabee.s3.amazonaws.com/kfc-kenya/item/ntR2Ptdjv19ZfIf0.jpg',
#     },
#     {
#         # restaurant_id: 2,
#         # menuoptions_id: 1,
#         name: 'Full chicken',
#         price: 1000,
#         description: 'Rotisserie Full Chicken',
#         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
#     },
#     {
#         # restaurant_id: 2,
#         # menuoptions_id: 2,
#         name: '1/2 chicken',
#         price: 500,
#         description: 'Rotisserie 1/2 Chicken',
#         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
#     },
#     {
#         # restaurant_id: 3,
#         # menuoptions_id: 1,
#         name: 'Regular Hawaiian',
#         price: 500,
#         description: 'Classic Pizza Macon and Pineapple',
#         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
#     },
# ])

puts '🍕 Seeding Meals...'
Meal.create!([
    {
        restaurant_id: 1,
        menuoptions_id: 1,
        name: '1 Chicken and Crispy Deal',
        price: 250,
        description: '1 Chicken piece served either in Original Recipe or Hot and Crispy',
        image_url: 'https://ontabee.s3.amazonaws.com/kfc-kenya/item/BWrIQuXPbaeAZCoJ.jpg',
    },
    {
        restaurant_id: 1,
        menuoptions_id: 2,
        name: '9 Chicken Pieces Crispy Deal',
        price: 1950,
        description: '9 Chicken pieces served either in Original Recipe or Hot and Crispy',
        image_url: 'https://ontabee.s3.amazonaws.com/kfc-kenya/item/ntR2Ptdjv19ZfIf0.jpg',
    },
    {
        restaurant_id: 2,
        menuoptions_id: 1,
        name: 'Full chicken',
        price: 1000,
        description: 'Rotisserie Full Chicken',
        image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
    },
    {
        restaurant_id: 2,
        menuoptions_id: 2,
        name: '1/2 chicken',
        price: 500,
        description: 'Rotisserie 1/2 Chicken',
        image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
    },
    {
        restaurant_id: 3,
        menuoptions_id: 1,
        name: 'Regular Hawaiian',
        price: 500,
        description: 'Classic Pizza Macon and Pineapple',
        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
    },
])
    
    
puts '📦 Seeding Orders...'
Order.create([
    {
        user_id: 1,
        meal_id: 1,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 2,
        meal_id: 1,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 3,
        meal_id: 1,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 4,
        meal_id: 1,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 1,
        meal_id: 2,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 1,
        meal_id: 3,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 2,
        meal_id: 2,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 3,
        meal_id: 2,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 3,
        meal_id: 3,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 4,
        meal_id: 2,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 4,
        meal_id: 3,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 5,
        meal_id: 10,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 6,
        meal_id: 11,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 7,
        meal_id: 50,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 6,
        meal_id: 48,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 7,
        meal_id: 10,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 8,
        meal_id: 10,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 9,
        meal_id: 10,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 10,
        meal_id: 48,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 8,
        meal_id: 48,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    }
])

puts '♨️  Seeding Restaurants...'
Restaurant.create([
    {
        admin_id: 1,
        name: 'Chicken Inn',
        image_url: 'https://chickeninn.co.ke/wp-content/uploads/2022/10/8352-Kenya-SBF-Double-Burger-It-Promo-OB-1000x3000HR.jpg',
        chef_url: '',
        chef_quote: '',
        chef_name: ''
    },
    {
        admin_id: 2,
        name: 'KFC',
        image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/56d71cd09fd611cf1b86d58bd1ded6ca/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        chef_url: '',
        chef_quote: '',
        chef_name: ''
    },
    {
        admin_id: 1,
        name: 'Pizza Inn',
        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/5351-Kenya-Facebook-Images-315x828LR2.jpg',
        chef_url: '',
        chef_quote: '',
        chef_name: ''
    }
])

puts "👥 Seeding Admins..."
Admin.create([
    {
        username: "admin1",
        email: "admin1@gmail.com",
        password_digest: "adminone1",
        image: "",
    },
    {
        username: "admin2",
        email: "admin2@gmail.com",
        password_digest: "admintwo2",
        image: "",
    }
])






#   {
        #         restaurant_id: 2,
        #         menuoptions_id: 3,
        #         name: '1/4 chicken',
        #         price: 250,
        #         description: 'Rotisserie 1/4 Chicken',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 4,
        #         name: 'Full chicken with large chips',
        #         price: 1100,
        #         description: 'Rotisserie full chicken with large chips',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 5,
        #         name: '1/2 chicken with regular chips',
        #         price: 600,
        #         description: 'Rotisserie 1/2 chicken with regular chips',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 6,
        #         name: '1/4 chicken with regular chips',
        #         price: 350,
        #         description: 'Rotisserie 1/4 chicken with regular chips',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 7,
        #         name: '1 piece chicken',
        #         price: 120,
        #         description: '1 Piece (order as many as you like)',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 8,
        #         name: '1 piecer chicken',
        #         price: 250,
        #         description: '1 piecer chicken with regular chips',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 9,
        #         name: '2 piecer chicken',
        #         price: 300,
        #         description: '2 piecer chicken with large chips',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 10,
        #         name: '3 piecer chicken with regular chips and coleslaw',
        #         price: 500,
        #         description: '3 piecer chicken with regular chips & coleslaw',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 11,
        #         name: '6 piecer chicken with 2X regular chips and 2X coleslaw',
        #         price: 1000,
        #         description: '6 piecer chicken with 2X regular chips and 2X coleslaw',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 12,
        #         name: '8 piecer bucket and mega chips',
        #         price: 1100,
        #         description: '8 piecer bucket and mega chips',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/d4629599f434b6130bf8bab89b977eef/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 13,
        #         name: 'Chicken Burger',
        #         price: 400,
        #         description:'Chicken Burger',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/1d64d234e404190aa137c166d4122177/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 14,
        #         name: 'Double Chicken Burger',
        #         price: 400,
        #         description:'Double Chicken Burger',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/1d64d234e404190aa137c166d4122177/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 15,
        #         name: 'Double Chicken Burger with Cheese',
        #         price: 400,
        #         description:'Double Chicken Burger with Cheese',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/1d64d234e404190aa137c166d4122177/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 16,
        #         name: 'Kiddies Drumstick with Regular Chips',
        #         price: 250,
        #         description:'Kiddies Drumstick with Regular Chips',
        #         image_url: 'https://ontabee.s3.amazonaws.com/kfc-kenya/item/s3UZ7EiksftNPlix.jpg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 17,
        #         name: 'Kiddies Burger with Regular Chips',
        #         price: 250,
        #         description:'Kiddies Burger with Regular Chips',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/1d64d234e404190aa137c166d4122177/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 18,
        #         name: 'Kiddies Bites with Regular Chips',
        #         price: 250,
        #         description:'Kiddies Bites with Regular Chips',
        #         image_url: 'https://ontabee.s3.amazonaws.com/kfc-kenya/item/s3UZ7EiksftNPlix.jpg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 19,
        #         name: 'Value Burger with Regular Chips',
        #         price: 250,
        #         description:'Value Burger with Regular Chips',
        #         image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/1d64d234e404190aa137c166d4122177/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 20,
        #         name: '4 Spicy Wings',
        #         price: 250,
        #         description:'4 Spicy Wings',
        #         image_url: 'https://ontabee.s3.amazonaws.com/kfc-kenya/item/s3UZ7EiksftNPlix.jpg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 21,
        #         name: '4 Spicy Wings with Regular Chips',
        #         price: 350,
        #         description:'4 Spicy Wings with Regular Chips',
        #         image_url: 'https://ontabee.s3.amazonaws.com/kfc-kenya/item/s3UZ7EiksftNPlix.jpg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 22,
        #         name: 'Chicken Bites small',
        #         price: 150,
        #         description: 'Chicken Bites small',
        #         image_url: 'https://ontabee.s3.amazonaws.com/kfc-kenya/item/s3UZ7EiksftNPlix.jpg',
        #     },
        #     {
        #         restaurant_id: 2,
        #         menuoptions_id: 23,
        #         name: 'Chicken Bites large',
        #         price: 350,
        #         description: 'Chicken Bites small',
        #         image_url: 'https://ontabee.s3.amazonaws.com/kfc-kenya/item/s3UZ7EiksftNPlix.jpg',
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 2,
        #         name: 'Medium Hawaiian',
        #         price: 750,
        #         description: 'Classic Pizza Macon and Pineapple',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 3,
        #         name: 'Large Hawaiian',
        #         price: 950,
        #         description: 'Classic Pizza Macon and Pineapple',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 4,
        #         name: 'Mega Hawaiian',
        #         price: 1200,
        #         description: 'Classic Pizza Macon and Pineapple',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 5,
        #         name: 'Regular Chicken & Mushroom',
        #         price: 500,
        #         description: 'Classic Pizza Succulent BBQ Chicken, Mushroom and Cream Mayo',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 6,
        #         name: 'Medium Chicken & Mushroom',
        #         price: 750,
        #         description: 'Classic Pizza Succulent BBQ Chicken, Mushroom and Cream Mayo',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 7,
        #         name: 'Large Chicken & Mushroom',
        #         price: 950,
        #         description: 'Classic Pizza Succulent BBQ Chicken, Mushroom and Cream Mayo',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 8,
        #         name: 'Mega Chicken & Mushroom',
        #         price: 1200,
        #         description: 'Classic Pizza Succulent BBQ Chicken, Mushroom and Cream Mayo',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 9,
        #         name: 'Regular Regina',
        #         price: 500,
        #         description: 'Classic Pizza Sandwich Beef and Mushroom',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 10,
        #         name: 'Medium Regina',
        #         price: 750,
        #         description: 'Classic Pizza Sandwich Beef and Mushroom',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 11,
        #         name: 'Large Regina',
        #         price: 950,
        #         description: 'Classic Pizza Sandwich Beef and Mushroom',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 12,
        #         name: 'Mega Regina',
        #         price: 1200,
        #         description: 'Classic Pizza Sandwich Beef and Mushroom',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 13,
        #         name: 'Regular Boerewors',
        #         price: 500,
        #         description: 'Classic Pizza 100% Minced Beef, Fresh Tomato and Fresh Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 14,
        #         name: 'Medium Boerewors',
        #         price: 750,
        #         description: 'Classic Pizza 100% Minced Beef, Fresh Tomato and Fresh Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 15,
        #         name: 'Large Boerewors',
        #         price: 950,
        #         description: 'Classic Pizza 100% Minced Beef, Fresh Tomato and Fresh Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 16,
        #         name: 'Mega Boerewors',
        #         price: 1200,
        #         description: 'Classic Pizza 100% Minced Beef, Fresh Tomato and Fresh Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 17,
        #         name: 'Regular BBQ Steak',
        #         price: 500,
        #         description: 'Classic Pizza Marinated BBQ Steak',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 18,
        #         name: 'Medium BBQ Steak',
        #         price: 750,
        #         description: 'Classic Pizza Marinated BBQ Steak',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 19,
        #         name: 'Large BBQ Steak',
        #         price: 950,
        #         description: 'Classic Pizza Marinated BBQ Steak',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 20,
        #         name: 'Mega BBQ Steak',
        #         price: 1200,
        #         description: 'Classic Pizza Marinated BBQ Steak',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 21,
        #         name: 'Regular Peri Peri Chicken',
        #         price: 500,
        #         description: 'Classic Pizza Spicy Peri-Peri Chicken',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 22,
        #         name: 'Medium Peri Peri Chicken',
        #         price: 750,
        #         description: 'Classic Pizza Spicy Peri-Peri Chicken',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 23,
        #         name: 'Large Peri Peri Chicken',
        #         price: 950,
        #         description: 'Classic Pizza Spicy Peri-Peri Chicken',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 24,
        #         name: 'Mega Peri Peri Chicken',
        #         price: 1200,
        #         description: 'Classic Pizza Spicy Peri-Peri Chicken',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 25,
        #         name: 'Regular Chicken Tikka',
        #         price: 500,
        #         description: 'Classic Pizza Marinated Tikka Chicken, Green Pepper and Onions',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 26,
        #         name: 'Medium Chicken Tikka',
        #         price: 750,
        #         description: 'Classic Pizza Marinated Tikka Chicken, Green Pepper and Onions',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 27,
        #         name: 'Large Chicken Tikka',
        #         price: 950,
        #         description: 'Classic Pizza Marinated Tikka Chicken, Green Pepper and Onions',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 28,
        #         name: 'Mega Chicken Tikka',
        #         price: 1200,
        #         description: 'Classic Pizza Marinated Tikka Chicken, Green Pepper and Onions',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 29,
        #         name: 'Regular Veg Tikka',
        #         price: 500,
        #         description: 'Classic Pizza Sweetcorn, Red & Green Pepper, Mushroom, Onion, Jalapenos and Tikka Sauce',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 30,
        #         name: 'Medium Veg Tikka',
        #         price: 750,
        #         description: 'Classic Pizza Sweetcorn, Red & Green Pepper, Mushroom, Onion, Jalapenos and Tikka Sauce',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 31,
        #         name: 'Large Veg Tikka',
        #         price: 950,
        #         description: 'Classic Pizza Sweetcorn, Red & Green Pepper, Mushroom, Onion, Jalapenos and Tikka Sauce',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 32,
        #         name: 'Mega Veg Tikka',
        #         price: 1200,
        #         description: 'Classic Pizza Sweetcorn, Red & Green Pepper, Mushroom, Onion, Jalapenos and Tikka Sauce',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 33,
        #         name: 'Regular Chicken & Beef Pepperoni',
        #         price: 550,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken, Beef Pepperoni, Mushroom and Green Pepper',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 34,
        #         name: 'Medium Chicken & Beef Pepperoni',
        #         price: 850,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken, Beef Pepperoni, Mushroom and Green Pepper',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 35,
        #         name: 'Large Chicken & Beef Pepperoni',
        #         price: 1000,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken, Beef Pepperoni, Mushroom and Green Pepper',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 36,
        #         name: 'Mega Chicken & Beef Pepperoni',
        #         price: 1350,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken, Beef Pepperoni, Mushroom and Green Pepper',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 37,
        #         name: 'Regular Chicken Macon BBQ',
        #         price: 550,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken, Macon , Sweetcorn and Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 38,
        #         name: 'Medium Chicken Macon BBQ',
        #         price: 850,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken, Macon , Sweetcorn and Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 38,
        #         name: 'Large Chicken Macon BBQ',
        #         price: 1000,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken, Macon , Sweetcorn and Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 40,
        #         name: 'Mega Chicken Macon BBQ',
        #         price: 1350,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken, Macon , Sweetcorn and Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 41,
        #         name: 'Regular Chicken Hawaiian',
        #         price: 550,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken and Pineapple',        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 42,
        #         name: 'Medium Chicken Hawaiian',
        #         price: 850,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken and Pineapple',        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 43,
        #         name: 'Large Chicken Hawaiian',
        #         price: 1000,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken and Pineapple',        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 44,
        #         name: 'Mega Chicken Hawaiian',
        #         price: 1350,
        #         description: 'Deluxe Pizza Succulent BBQ Chicken and Pineapple',        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 45,
        #         name: 'Regular Beef Pepperoni Plus',
        #         price: 550,
        #         description: 'Deluxe Pizza Double Beef Pepperoni, Mushroom and Fresh Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 46,
        #         name: 'Medium Beef Pepperoni Plus',
        #         price: 850,
        #         description: 'Deluxe Pizza Double Beef Pepperoni, Mushroom and Fresh Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 47,
        #         name: 'Large Beef Pepperoni Plus',
        #         price: 1000,
        #         description: 'Deluxe Pizza Double Beef Pepperoni, Mushroom and Fresh Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 48,
        #         name: 'Mega Beef Pepperoni Plus',
        #         price: 1350,
        #         description: 'Deluxe Pizza Double Beef Pepperoni, Mushroom and Fresh Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 49,
        #         name: 'Regular Cheese Burger',
        #         price: 550,
        #         description: 'Deluxe Pizza 100% Beef Mince, Real cheddar cheese, Fresh Onion and Creamy Mayo',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 50,
        #         name: 'Medium Cheese Burger',
        #         price: 850,
        #         description: 'Deluxe Pizza 100% Beef Mince, Real cheddar cheese, Fresh Onion and Creamy Mayo',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 51,
        #         name: 'Large Cheese Burger',
        #         price: 1000,
        #         description: 'Deluxe Pizza 100% Beef Mince, Real cheddar cheese, Fresh Onion and Creamy Mayo',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 52,
        #         name: 'Mega Cheese Burger',
        #         price: 1350,
        #         description: 'Deluxe Pizza 100% Beef Mince, Real cheddar cheese, Fresh Onion and Creamy Mayo',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 53,
        #         name: 'Regular Roast Veg & Feta',
        #         price: 550,
        #         description: 'Deluxe Pizza Fresh red & Green Pepper, Olives Feta Cheese and Mushroom',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 54,
        #         name: 'Medium Roast Veg & Feta',
        #         price: 850,
        #         description: 'Deluxe Pizza Fresh red & Green Pepper, Olives Feta Cheese and Mushroom',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 55,
        #         name: 'Large Roast Veg & Feta',
        #         price: 1000,
        #         description: 'Deluxe Pizza Fresh red & Green Pepper, Olives Feta Cheese and Mushroom',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 56,
        #         name: 'Mega Roast Veg & Feta',
        #         price: 1350,
        #         description: 'Deluxe Pizza Fresh red & Green Pepper, Olives Feta Cheese and Mushroom',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 57,
        #         name: 'Regular Veg Feast',
        #         price: 550,
        #         description: 'Deluxe Pizza Sweetcorn, Green Pepper, Chilli and Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 58,
        #         name: 'Medium Veg Feast',
        #         price: 850,
        #         description: 'Deluxe Pizza Sweetcorn, Green Pepper, Chilli and Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 59,
        #         name: 'Large Veg Feast',
        #         price: 1000,
        #         description: 'Deluxe Pizza Sweetcorn, Green Pepper, Chilli and Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 60,
        #         name: 'Mega Veg Feast',
        #         price: 1350,
        #         description: 'Deluxe Pizza Sweetcorn, Green Pepper, Chilli and Onion',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 61,
        #         name: 'Regular Spicy Boerewors',
        #         price: 550,
        #         description: 'Deluxe Pizza 100% Minced Beef, Fresh Onions, Green Pepper and Jalapeno',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 62,
        #         name: 'Medium Spicy Boerewors',
        #         price: 850,
        #         description: 'Deluxe Pizza 100% Minced Beef, Fresh Onions, Green Pepper and Jalapeno',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 63,
        #         name: 'Large Spicy Boerewors',
        #         price: 1000,
        #         description: 'Deluxe Pizza 100% Minced Beef, Fresh Onions, Green Pepper and Jalapeno',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 64,
        #         name: 'Mega Spicy Boerewors',
        #         price: 1350,
        #         description: 'Deluxe Pizza 100% Minced Beef, Fresh Onions, Green Pepper and Jalapeno',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 65,
        #         name: 'Regular Meat Deluxe',
        #         price: 600,
        #         description: 'Supreme Pizza Beef Pepperoni, BBQ Steak, Macn and Sandwich Beef',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 66,
        #         name: 'Medium Meat Deluxe',
        #         price: 850,
        #         description: 'Supreme Pizza Beef Pepperoni, BBQ Steak, Macn and Sandwich Beef',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 67,
        #         name: 'Large Meat Deluxe',
        #         price: 1100,
        #         description: 'Supreme Pizza Beef Pepperoni, BBQ Steak, Macn and Sandwich Beef',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 68,
        #         name: 'Mega Meat Deluxe',
        #         price: 1350,
        #         description: 'Supreme Pizza Beef Pepperoni, BBQ Steak, Macn and Sandwich Beef',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 69,
        #         name: 'Regular Chicken Feast',
        #         price: 600,
        #         description: 'Supreme Pizza Chicken Tikka, Peri-Peri Green Pepper, Onions, Sweetcorn, Mushroom, Mozzarella',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 70,
        #         name: 'Medium Chicken Feast',
        #         price: 850,
        #         description: 'Supreme Pizza Chicken Tikka, Peri-Peri Green Pepper, Onions, Sweetcorn, Mushroom, Mozzarella',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 71,
        #         name: 'Large Chicken Feast',
        #         price: 1100,
        #         description: 'Supreme Pizza Chicken Tikka, Peri-Peri Green Pepper, Onions, Sweetcorn, Mushroom, Mozzarella',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 72,
        #         name: 'Mega Chicken Feast',
        #         price: 1350,
        #         description: 'Supreme Pizza Chicken Tikka, Peri-Peri Green Pepper, Onions, Sweetcorn, Mushroom, Mozzarella',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 73,
        #         name: 'Regular Nyama Feast',
        #         price: 600,
        #         description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 74,
        #         name: 'Medium Nyama Feast',
        #         price: 850,
        #         description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 75,
        #         name: 'Large Nyama Feast',
        #         price: 1100,
        #         description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     },
        #     {
        #         restaurant_id: 3,
        #         menuoptions_id: 76,
        #         name: 'Mega Nyama Feast',
        #         price: 1350,
        #         description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
        #         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
        #     }
        # ])