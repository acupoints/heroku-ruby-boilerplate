class FyrbAnswerStep < ApplicationRecord
  belongs_to :fyrb_user
  belongs_to :fyrb_answer_sheet
end
