class FyrbUtilityFunctionSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  attributes :id, :imports, :input_parameters, :output_parameters, :return_results, :languages, :support_platforms, :used_counts, :instructions, :naming_conventions
end
