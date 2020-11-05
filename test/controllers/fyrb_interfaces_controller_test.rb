require 'test_helper'

class FyrbInterfacesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_interfaces_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_interfaces_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_interfaces_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_interfaces_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_interfaces_destroy_url
    assert_response :success
  end

end
