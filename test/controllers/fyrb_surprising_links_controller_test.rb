require 'test_helper'

class FyrbSurprisingLinksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_surprising_links_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_surprising_links_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_surprising_links_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_surprising_links_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_surprising_links_destroy_url
    assert_response :success
  end

end
