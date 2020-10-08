require 'test_helper'

class FyrbMicropostsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fyrb_microposts_index_url
    assert_response :success
  end

end
