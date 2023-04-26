
puts '👥 Seeding Users...'
User.create([
    {
        username: 'mercienyambura',
        email: 'mercienyambura@gmail.com',
        password_digest: 'mercienyambura',
        image: '',
    },
    {
        username: 'alex',
        email: 'alex@gmail.com',
        password_digest: '1234',
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


puts '♨️ Seeding Admins...'
Admin.create([
    {
        username: 'mercienyambura',
        email: 'mercienyambura@gmail.com',
        password_digest: 'mercienyambura',
        image: '',
    },
    {
        username: 'alex',
        email: 'alex@gmail.com',
        password_digest: '1234',
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


puts '🔥 Seeding Restaurants...'
Restaurant.create([
    {
        admin_id: 1,
        name: 'Chicken Inn',
        image_url: 'https://chickeninn.co.ke/wp-content/uploads/2022/10/8352-Kenya-SBF-Double-Burger-It-Promo-OB-1000x3000HR.jpg',
        chef_url: '',
        chef_quote: 'Cooking is like painting. Just as there are only so many notes or colours, there are only so many flowers.It is how you combine them that sets your apart',
        chef_name: 'Gordon Ramsy'
    },
    {
        admin_id: 2,
        name: 'KFC',
        image_url: 'https://tb-static.uber.com/prod/image-proc/processed_images/56d71cd09fd611cf1b86d58bd1ded6ca/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        chef_url: '',
        chef_quote: 'The brothe defines the chef',
        chef_name: 'Alex Mash'
    },
    {
        admin_id: 3,
        name: 'Taco Bells',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdVQqDvjjZ9jNO5KSVDb484tMumLeypqZuQ&usqp=CAU',
        chef_url: '',
        chef_quote: 'The brothe defines the chef',
        chef_name: 'Alex Mash'
    },
    {
        admin_id: 4,
        name: 'Icecream Inn',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LIabZ6GrggPsh7FuFPd_W8cR5hpeUGXLFg&usqp=CAU',
        chef_url: '',
        chef_quote: 'The brothe defines the chef',
        chef_name: 'Alex Mash'
    },
    {
        admin_id: 5,
        name: 'Burger King',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqbB3P9P00K4QENqLkXN5mGJGBol6hlp1u3w&usqp=CAU',
        chef_url: '',
        chef_quote: 'The brothe defines the chef',
        chef_name: 'Alex Mash'
    },
    {
        admin_id: 6,
        name: 'Gallitos',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxng0YuYFb8DDAIrw96sTM_1ZOqlATjtFXlw&usqp=CAU',
        chef_url: '',
        chef_quote: 'The brothe defines the chef and chef and chef',
        chef_name: 'Not Alex'
    },
])


puts '🍳 Seeding Menuoptions...'
Menuoption.create!([
    {
  restaurant_id: 1,
  name: "Chicken",
  price: 10,
  description: "rice, chicken and chicken",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUU6aHv3WlqCP8t4hdZkXXoxXxluACIcXceQ&usqp=CAU"
    },
    {
  restaurant_id: 2,
  name: "Fried Chicken",
  price: 10,
  description: "grilled chicken, bell_pepper and garlic",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUU6aHv3WlqCP8t4hdZkXXoxXxluACIcXceQ&usqp=CAU"
    },
    {
        restaurant_id: 3,
        name: "American Tacos",
        price: 10,
        description: "n*n, beef stripes, lettuce and tomatoes",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfSDKQ5WOLjyJqherv_JzXnroofcTtjmGhA&usqp=CAU"
          },
          {
            restaurant_id: 4,
            name: "Chilling Ice Corner",
            price: 10,
            description: "vanilla, strawbery",
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFT8H1yi0GQ6dVI36ALGYB9bWZvOl9K9_Czg&usqp=CAU"
              },
  
              {
                restaurant_id: 5,
                name: "Burgers",
                price: 10,
                description: "just bread and meat",
                image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64FsnUG179QiGD-BZ1_QeUPVhS886Et-duQ&usqp=CAU"
                  },
                  {
                    restaurant_id: 6,
                    name: "Home-made pizza",
                    price: 10,
                    description: "Classic Pizza with pepperoni and cheese",
                    image_url: ""
                      }
])

puts '🍕 Seeding Meal...'
Meal.create!([
    {
        
        menuoption_id: 1,
        name: 'Large Chicken Feast',
        price: 1100,
        description: 'Supreme Pizza Chicken Tikka, Peri-Peri Green Pepper, Onions, Sweetcorn, Mushroom, Mozzarella',
        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
    },
    {
        menuoption_id: 2,
        name: 'Mega Chicken Feast',
        price: 1350,
        description: 'Supreme Pizza Chicken Tikka, Peri-Peri Green Pepper, Onions, Sweetcorn, Mushroom, Mozzarella',
        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
    },
    {

        menuoption_id: 3,
        name: 'Regular Nyama Feast',
        price: 600,
        description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
    },
    {
        menuoption_id: 4,
        name: 'Medium Nyama Feast',
        price: 850,
        description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
    },
    {
        menuoption_id: 5,
        name: 'Large Nyama Feast',
        price: 1100,
        description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
    },
    {
        menuoption_id: 6,
        name: 'Mega Nyama Feast',
        price: 1350,
        description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
        image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
    }
])

puts '📦 Seeding Orders...'
Order.create([
    {
        user_id: 1,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 2,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 3,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 4,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 1,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 1,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 2,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 3,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 3,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 4,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    },
    {
        user_id: 4,
        status: 'Pending',
        address: 'Kahawa sukari, opposite PCEA House 1234',
        date_of_delivery: '17-08-2023',
        quantity: 2,
        price: 36
    }

])

