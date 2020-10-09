require 'test_helper'

class FyrbFragmentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_fragments_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_fragments_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_fragments_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_fragments_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_fragments_destroy_url
    assert_response :success
  end

end
