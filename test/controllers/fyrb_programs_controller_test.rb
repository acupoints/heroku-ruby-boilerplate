require 'test_helper'

class FyrbProgramsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_programs_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_programs_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_programs_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_programs_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_programs_destroy_url
    assert_response :success
  end

end
