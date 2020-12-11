require 'test_helper'

class FyrbRelatedMethodsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_related_methods_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_related_methods_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_related_methods_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_related_methods_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_related_methods_destroy_url
    assert_response :success
  end

end
