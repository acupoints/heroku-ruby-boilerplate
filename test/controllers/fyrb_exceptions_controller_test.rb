require 'test_helper'

class FyrbExceptionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_exceptions_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_exceptions_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_exceptions_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_exceptions_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_exceptions_destroy_url
    assert_response :success
  end

end
