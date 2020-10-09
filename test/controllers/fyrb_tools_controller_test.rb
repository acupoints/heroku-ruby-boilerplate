require 'test_helper'

class FyrbToolsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_tools_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_tools_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_tools_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_tools_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_tools_destroy_url
    assert_response :success
  end

end
