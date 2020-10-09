require 'test_helper'

class FyrbStatementsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_statements_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_statements_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_statements_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_statements_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_statements_destroy_url
    assert_response :success
  end

end
