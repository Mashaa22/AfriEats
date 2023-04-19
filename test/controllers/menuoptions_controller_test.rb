require "test_helper"

class MenuoptionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @menuoption = menuoptions(:one)
  end

  test "should get index" do
    get menuoptions_url, as: :json
    assert_response :success
  end

  test "should create menuoption" do
    assert_difference("Menuoption.count") do
      post menuoptions_url, params: { menuoption: { description: @menuoption.description, image_url: @menuoption.image_url, name: @menuoption.name, price: @menuoption.price, restaurant_id: @menuoption.restaurant_id } }, as: :json
    end

    assert_response :created
  end

  test "should show menuoption" do
    get menuoption_url(@menuoption), as: :json
    assert_response :success
  end

  test "should update menuoption" do
    patch menuoption_url(@menuoption), params: { menuoption: { description: @menuoption.description, image_url: @menuoption.image_url, name: @menuoption.name, price: @menuoption.price, restaurant_id: @menuoption.restaurant_id } }, as: :json
    assert_response :success
  end

  test "should destroy menuoption" do
    assert_difference("Menuoption.count", -1) do
      delete menuoption_url(@menuoption), as: :json
    end

    assert_response :no_content
  end
end
