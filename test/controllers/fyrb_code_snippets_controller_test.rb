require 'test_helper'

class FyrbCodeSnippetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_code_snippets_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_code_snippets_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_code_snippets_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_code_snippets_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_code_snippets_destroy_url
    assert_response :success
  end

end
