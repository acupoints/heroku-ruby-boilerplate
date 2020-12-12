class FyrbAnswerStepSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  belongs_to :fyrb_answer_sheet
  attributes :id, :antecedent, :operation, :consequence, :audio_animation, :used_counts
end
