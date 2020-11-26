class FyrbCodeSnippetSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  attributes :id, :source_lines, :development_tools, :resolved_exceptions, :module_templates, :languages, :support_platforms, :used_counts, :instructions, :naming_conventions
end
