require 'test_helper'

class FyrbManagedAssetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_managed_assets_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_managed_assets_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_managed_assets_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_managed_assets_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_managed_assets_destroy_url
    assert_response :success
  end

end
