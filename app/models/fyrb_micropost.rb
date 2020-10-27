class FyrbMicropost < ApplicationRecord
  belongs_to :fyrb_user
  has_many :fyrb_terms, dependent: :destroy
  has_many :fyrb_statements, dependent: :destroy
  has_many :fyrb_fragments, dependent: :destroy
end
