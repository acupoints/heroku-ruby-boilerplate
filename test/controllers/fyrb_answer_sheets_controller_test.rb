require 'test_helper'

class FyrbAnswerSheetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_answer_sheets_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_answer_sheets_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_answer_sheets_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_answer_sheets_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_answer_sheets_destroy_url
    assert_response :success
  end

end
