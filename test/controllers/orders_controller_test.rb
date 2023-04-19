require "test_helper"

class OrdersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @order = orders(:one)
  end

  test "should get index" do
    get orders_url, as: :json
    assert_response :success
  end

  test "should create order" do
    assert_difference("Order.count") do
      post orders_url, params: { order: { address: @order.address, date_of_delivery: @order.date_of_delivery, menu_id: @order.menu_id, price: @order.price, quantity: @order.quantity, status: @order.status, user_id: @order.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show order" do
    get order_url(@order), as: :json
    assert_response :success
  end

  test "should update order" do
    patch order_url(@order), params: { order: { address: @order.address, date_of_delivery: @order.date_of_delivery, menu_id: @order.menu_id, price: @order.price, quantity: @order.quantity, status: @order.status, user_id: @order.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy order" do
    assert_difference("Order.count", -1) do
      delete order_url(@order), as: :json
    end

    assert_response :no_content
  end
end
