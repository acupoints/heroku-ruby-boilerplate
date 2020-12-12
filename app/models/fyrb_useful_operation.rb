class FyrbUsefulOperation < ApplicationRecord
  belongs_to :fyrb_user

  ## PostgreSQL's full text search
  include PgSearch::Model
  pg_search_scope :global_search,
    against: [:tags, :commands],
    associated_against: {
      # fyrb_related_methods: [:interface_name, :interface_type, :description],
      fyrb_user: :name
    },
    using: {
      tsearch: {dictionary: "english"}
    }
end
