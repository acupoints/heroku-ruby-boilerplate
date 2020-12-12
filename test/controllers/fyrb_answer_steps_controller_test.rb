require 'test_helper'

class FyrbAnswerStepsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_answer_steps_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_answer_steps_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_answer_steps_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_answer_steps_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_answer_steps_destroy_url
    assert_response :success
  end

end
