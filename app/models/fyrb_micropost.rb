class FyrbMicropost < ApplicationRecord
  belongs_to :fyrb_user
  has_many :fyrb_terms, dependent: :destroy
  has_many :fyrb_statements, dependent: :destroy
  has_many :fyrb_fragments, dependent: :destroy

  ## PostgreSQL's full text search
  include PgSearch::Model
  pg_search_scope :global_search,
    against: [:title, :content],
    associated_against: {
      fyrb_fragments: [:title, :introduction, :detail],
      fyrb_user: :name
    },
    using: {
      tsearch: {dictionary: "english"}
    }
end
