class FyrbUsefulOperationSerializer < ActiveModel::Serializer
  attributes :id, :tags, :commands, :options, :functions, :examples
end
