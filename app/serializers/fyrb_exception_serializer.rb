class FyrbExceptionSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  belongs_to :fyrb_program
  attributes :id, :platforms, :steps, :mul_errors, :solutions
end
