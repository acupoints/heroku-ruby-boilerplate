require 'test_helper'

class FyrbGraphicSymbolsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_graphic_symbols_index_url
    assert_response :success
  end

  test "should get show" do
    get fyrb_graphic_symbols_show_url
    assert_response :success
  end

  test "should get create" do
    get fyrb_graphic_symbols_create_url
    assert_response :success
  end

  test "should get update" do
    get fyrb_graphic_symbols_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fyrb_graphic_symbols_destroy_url
    assert_response :success
  end

end
