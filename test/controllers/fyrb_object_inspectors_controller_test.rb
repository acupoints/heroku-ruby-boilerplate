require 'test_helper'

class FyrbObjectInspectorsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_object_inspectors_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_object_inspectors_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_object_inspectors_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_object_inspectors_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_object_inspectors_destroy_url
    assert_response :success
  end

end
