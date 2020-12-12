class FyrbAnswerSheet < ApplicationRecord
  belongs_to :fyrb_user
  has_many :fyrb_answer_steps, dependent: :destroy

  ## PostgreSQL's full text search
  include PgSearch::Model
  pg_search_scope :global_search,
    against: [:title, :description],
    associated_against: {
      fyrb_answer_steps: [:antecedent, :operation, :consequence],
      fyrb_user: :name
    },
    using: {
      tsearch: {dictionary: "english"}
    }
end
