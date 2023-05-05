# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# puts '👥 Seeding Users...'

User.create([
    {
        username: 'mercy',
        email: 'mercienyambura@gmail.com',
        password_digest: 'mercienyambura',
        image: '',
    },
    {
        username: 'Alex',
        email: 'alex@gmail.com',
        password_digest: '123456',
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
puts '♨️ Seeded Users'


Admin.create([
    {
        username: 'Maranga',
        email: 'amaranga22@gmail.com',
        password_digest: '123456',
        image: '',
        pin: 654321,
    },
    {
        username: 'mercy',
        email: 'mercy@gmail.com',
        password_digest: '1234',
        image: '',
        pin: 123456,

    },
    {
        username: 'marksangiriaki',
        email: 'marksangiriaki@gmail.com',
        password_digest: 'marksangiriaki',
        image: '',
        pin: 123456,

    },
    {
        username: 'mariamali',
        email: 'mariamali@gmail.com',
        password_digest: 'mariamali',
        image: '',
        pin: 123456,

    },
    {
        username: 'daisyjebiwot',
        email: 'daisyjebiwot@gmail.com',
        password_digest: 'daisyjebiwot',
        image: '',
        pin: 123456,

    },
    {
        username: 'abelmuriithi',
        email: 'abelmuriithi@gmai.com',
        password_digest: 'abelmuriithi',
        image: '',
        pin: 123456,

    }
])
puts '🔥 Seeded Admins...'


Restaurant.create([
    {
        admin_id: 1,
        name: 'BigSquare',
        image_url: 'https://images.privco.com/production/18377cd1013b36ef5cc587c4261283f0.jpeg',
        chef_url: 'https://frenchefs.com/wp-content/uploads/2021/04/5f05f0977cb93271ad0e75f6__DSF9718-p-1600.jpeg',
        chef_quote: 'Cooking is like painting. Just as there are only so many notes or colours, there are only so many flowers.It is how you combine them that sets your apart',
        chef_name: 'Michaela Ndubathi'
    },
    {
        admin_id: 2,
        name: 'Taco_bell',
        image_url: 'https://assets.turbologo.com/blog/en/2020/02/19084615/Taco-Bell-958x575.png',
        chef_url: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,g_center,h_900,q_60,w_1600/696de1f6563930b41a69f2f06847501e.jpg',
        chef_quote: 'Cooking is like love. It should be entered into with abandon or not at all.',
        chef_name: 'Mark Olahgs'
    },
    {
        admin_id: 3,
        name: 'Feast On',
        image_url: 'https://ontarioculinary.com/wp-content/uploads/2020/01/feaston_large.png',
        chef_url: '',
        chef_quote: 'A recipe has no soul. You, as the cook, must bring soul to the recipe.',
        chef_name: 'Jamal Hamstey'
    },
    {
        admin_id: 4,
        name: 'Emirien',
        image_url: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/04/attachment_70344026-e1555561585738.jpg?auto=format&q=60&fit=max&w=930',
        chef_url: 'https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8=',
        chef_quote: 'In cooking, as in all the arts, simplicity is the sign of perfection',
        chef_name: 'Joe Smith'
    },
    {
        admin_id: 5,
        name: 'Kokitos',
        image_url: 'https://static.wixstatic.com/media/dde808_3b673a5d77a649859650646ee3c6489f~mv2_d_3024_4032_s_4_2.jpg/v1/fit/w_2500,h_1330,al_c/dde808_3b673a5d77a649859650646ee3c6489f~mv2_d_3024_4032_s_4_2.jpg',
        chef_url: 'https://media.istockphoto.com/id/638129316/photo/hes-always-updating-his-craft.jpg?s=612x612&w=0&k=20&c=_Sb_0JdCnDb0JA96iZDeCAMxhjFEdcF703FcuQLqeTk=',
        chef_quote: 'A good drink is the foundation of genuine happiness.',
        chef_name: 'Auguste Escobar'
    },
    {
        admin_id: 6,
        name: 'FastFood',
        image_url: 'https://images.template.net/wp-content/uploads/2016/11/07105828/fast-food-logo-designs-feature-images.jpg',
        chef_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAzSfk7bpf4oddLLq-RlDl09Gxfs_wGxF1A&usqp=CAU',
        chef_quote: 'The only real stumbling block is fear of failure. In cooking, youve got to have a what-the-hell attitude',
        chef_name: 'Wolggang Puck'
    },
])
puts '🍖♨️🔥🥩🥓🍳 Seeded Restaurants...'


# Menuoption.create!([
#     {
#   restaurant_id: 1,
#   name: "Chicken",
#   price: 10,
#   description: "rice, chicken and chicken"
#     },
#     {
#   restaurant_id: 2,
#   name: "Fried Chicken",
#   price: 10,
#   description: "grilled chicken, bell_pepper and garlic"
#     },
#     {
#         restaurant_id: 3,
#         name: "American Tacos",
#         price: 10,
#         description: "n*n, beef stripes, lettuce and tomatoes",
#           },
#           {
#             restaurant_id: 4,
#             name: "Chilling Ice Corner",
#             price: 10,
#             description: "vanilla, strawbery",
#               },
  
#               {
#                 restaurant_id: 5,
#                 name: "Burgers",
#                 price: 10,
#                 description: "just bread and meat",
#                   },
#                   {
#                     restaurant_id: 6,
#                     name: "Home-made pizza",
#                     price: 10,
#                     description: "Classic Pizza with pepperoni and cheese",
#                       }
# ])
# puts '🍕 Seeded MenuOptions...'



# Meal.create!([
#     {
        
#         menuoption_id: 1,
#         name: 'Large Chicken Feast',
#         price: 1100,
#         description: 'Supreme Pizza Chicken Tikka, Peri-Peri Green Pepper, Onions, Sweetcorn, Mushroom, Mozzarella',
#         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
#     },
#     {
#         menuoption_id: 2,
#         name: 'Mega Chicken Feast',
#         price: 1350,
#         description: 'Supreme Pizza Chicken Tikka, Peri-Peri Green Pepper, Onions, Sweetcorn, Mushroom, Mozzarella',
#         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
#     },
#     {

#         menuoption_id: 3,
#         name: 'Regular Nyama Feast',
#         price: 600,
#         description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
#         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
#     },
#     {
#         menuoption_id: 4,
#         name: 'Medium Nyama Feast',
#         price: 850,
#         description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
#         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
#     },
#     {
#         menuoption_id: 5,
#         name: 'Large Nyama Feast',
#         price: 1100,
#         description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
#         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
#     },
#     {
#         menuoption_id: 6,
#         name: 'Mega Nyama Feast',
#         price: 1350,
#         description: 'Supreme Pizza BBQ Steak, Pepperoni, Boereword Mince, Macon, Ham, Green Pepper, Onion, Sweetcorn, Diced Tomato, Mozzarella Cheese',
#         image_url: 'https://pizzainn.co.ke/wp-content/uploads/2017/05/4956-Kenya-PI-SM-300x300HR-2.jpg'
#     }
# ])
# puts '🍕 Seeded Meals...'

# Order.create([
#     {
#         user_id: 1,
#         restaurant_id: 1,
#         status: 'Pending',
#         address: 'Kahawa sukari, opposite PCEA House 1234',
#         date_of_delivery: '17-08-2023',
#         quantity: 2,
#         price: 36
#     },
#     {
#         user_id: 2,
#         restaurant_id: 2,
#         status: 'Pending',
#         address: 'Kahawa sukari, opposite PCEA House 1234',
#         date_of_delivery: '17-08-2023',
#         quantity: 2,
#         price: 36
#     },
#     {
#         user_id: 3,
#         restaurant_id: 3,
#         status: 'Pending',
#         address: 'Kahawa sukari, opposite PCEA House 1234',
#         date_of_delivery: '17-08-2023',
#         quantity: 2,
#         price: 36
#     },
#     {
#         user_id: 4,
#         restaurant_id: 4,
#         status: 'Pending',
#         address: 'Kahawa sukari, opposite PCEA House 1234',
#         date_of_delivery: '17-08-2023',
#         quantity: 2,
#         price: 36
#     },
#     {
#         user_id: 2,
#         restaurant_id: 5,
#         status: 'Pending',
#         address: 'Kahawa sukari, opposite PCEA House 1234',
#         date_of_delivery: '17-08-2023',
#         quantity: 2,
#         price: 36
#     },
#     {
#         user_id: 1,
#         restaurant_id: 1,
#         status: 'Pending',
#         address: 'Kahawa sukari, opposite PCEA House 1234',
#         date_of_delivery: '17-08-2023',
#         quantity: 2,
#         price: 36
#     },
#     {
#         user_id: 6,
#         restaurant_id: 6,
#         status: 'Pending',
#         address: 'Kahawa sukari, opposite PCEA House 1234',
#         date_of_delivery: '17-08-2023',
#         quantity: 2,
#         price: 36
#     },
#     {
#         user_id: 5,
#         restaurant_id: 3,
#         status: 'Pending',
#         address: 'Kahawa sukari, opposite PCEA House 1234',
#         date_of_delivery: '17-08-2023',
#         quantity: 2,
#         price: 36
#     },
#     {
#         user_id: 3,
#         restaurant_id: 2,
#         status: 'Pending',
#         address: 'Kahawa sukari, opposite PCEA House 1234',
#         date_of_delivery: '17-08-2023',
#         quantity: 2,
#         price: 36
#     },
#     {
#         user_id: 5,
#         restaurant_id: 4,
#         status: 'Pending',
#         address: 'Kahawa sukari, opposite PCEA House 1234',
#         date_of_delivery: '17-08-2023',
#         quantity: 2,
#         price: 36
#     },
#     {
#         user_id: 5,
#         restaurant_id: 1,
#         status: 'Pending',
#         address: 'Kahawa sukari, opposite PCEA House 1234',
#         date_of_delivery: '17-08-2023',
#         quantity: 2,
#         price: 36
#     }

# ])
# puts '📦 Seeded Orders...'

