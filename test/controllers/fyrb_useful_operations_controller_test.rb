require 'test_helper'

class FyrbUsefulOperationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_useful_operations_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_useful_operations_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_useful_operations_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_useful_operations_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_useful_operations_destroy_url
    assert_response :success
  end

end
