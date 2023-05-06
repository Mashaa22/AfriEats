# AfriEats App
AfriEats is a multi-vendor food ordering application built with React and Ruby on Rails. It allows customers to order meals from different restaurants at the comfort of their homes. As a vendor, you can also host your restaurant(s) and post your meals.

## Bugs
One known bug in the app is that Sendgrid is not working with the deployed pg database in render. This issue is currently being investigated by the development team.

## Technologies Used
AfriEats was built using the following technologies:

1. React
2. Ruby on Rails
3. PostgreSQL

### Additional technologies and libraries used in the project include:
1. Redux
2. React Router
3. Bootstrap
4. Axios
5. Bcrypt
6. Cloudinary

## Features
AfriEats comes with the following features:

1. View restaurants and their meals
2. Order food
3. Checkout
4. Add a meal as admin
5. Add a menu option as admin
6. Delete a meal as admin
7. Edit a meal as admin
8. See order history as admin

## Getting Started
To get started with AfriEats, follow these steps:

1. Clone this repository to your local machine by running the command git clone https://github.com/your-username/AfriEats.git
2. Navigate into the cloned directory using cd AfriEats
3. Install the necessary dependencies by running the command npm install and bundle install
4. Create the PostgreSQL database by running the command rails db:create
5. Migrate the database schema by running the command rails db:migrate
6. Seed the database with sample data by running the command rails db:seed
7. Start the application by running the command rails s and npm start

### As a customer, you can:

1. Browse restaurants and their menus
2. Add items to your cart
3. Checkout and place an order

### As an admin, you can:

1. Add a meal to a restaurant's menu
2. Add a menu option for a restaurant
3. Delete a meal from a restaurant's menu
4. Edit a meal on a restaurant's menu
5. View order history

## Contributing
If you'd like to contribute to AfriEats, please follow these steps:

1. Fork this repository
2. Create a new branch with your feature or bug fix
3. Make your changes and commit them
4. Push your changes to your forked repository
5. Create a pull request

## License
AfriEats is licensed under the MIT License.
