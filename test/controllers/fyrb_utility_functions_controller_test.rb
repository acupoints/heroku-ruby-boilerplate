require 'test_helper'

class FyrbUtilityFunctionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_utility_functions_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_utility_functions_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_utility_functions_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_utility_functions_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_utility_functions_destroy_url
    assert_response :success
  end

end
