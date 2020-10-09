require 'test_helper'

class FyrbTagsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_tags_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_tags_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_tags_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_tags_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_tags_destroy_url
    assert_response :success
  end

end
