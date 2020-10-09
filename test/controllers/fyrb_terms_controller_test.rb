require 'test_helper'

class FyrbTermsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_terms_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_terms_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_terms_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_terms_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_terms_destroy_url
    assert_response :success
  end

end
