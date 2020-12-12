class FyrbUserSerializer < ActiveModel::Serializer
  has_many :fyrb_microposts, dependent: :destroy
  has_many :fyrb_tags, dependent: :destroy
  has_many :fyrb_tools, dependent: :destroy
  has_many :fyrb_terms, dependent: :destroy
  has_many :fyrb_programs, dependent: :destroy
  has_many :fyrb_exceptions, dependent: :destroy
  has_many :fyrb_interfaces, dependent: :destroy

  has_many :fyrb_utility_functions, dependent: :destroy
  has_many :fyrb_code_snippets, dependent: :destroy
  has_many :fyrb_surprising_links, dependent: :destroy
  has_many :fyrb_graphic_symbols, dependent: :destroy

  has_many :fyrb_object_inspectors, dependent: :destroy
  has_many :fyrb_related_methods, dependent: :destroy
  has_many :fyrb_answer_sheets, dependent: :destroy
  has_many :fyrb_answer_steps, dependent: :destroy
  has_many :fyrb_managed_assets, dependent: :destroy
  has_many :fyrb_useful_operations, dependent: :destroy

  attributes :id, :name, :username, :email, :password_digest
end
