require "test_helper"

class MealsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @meal = meals(:one)
  end

  test "should get index" do
    get meals_url, as: :json
    assert_response :success
  end

  test "should create meal" do
    assert_difference("Meal.count") do
      post meals_url, params: { meal: { description: @meal.description, image_url: @meal.image_url, menu_options_id: @meal.menu_options_id, name: @meal.name, price: @meal.price, restaurant_id: @meal.restaurant_id } }, as: :json
    end

    assert_response :created
  end

  test "should show meal" do
    get meal_url(@meal), as: :json
    assert_response :success
  end

  test "should update meal" do
    patch meal_url(@meal), params: { meal: { description: @meal.description, image_url: @meal.image_url, menu_options_id: @meal.menu_options_id, name: @meal.name, price: @meal.price, restaurant_id: @meal.restaurant_id } }, as: :json
    assert_response :success
  end

  test "should destroy meal" do
    assert_difference("Meal.count", -1) do
      delete meal_url(@meal), as: :json
    end

    assert_response :no_content
  end
end
