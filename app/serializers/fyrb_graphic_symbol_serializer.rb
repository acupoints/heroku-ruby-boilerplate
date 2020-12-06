class FyrbGraphicSymbolSerializer < ActiveModel::Serializer
  belongs_to :fyrb_user
  attributes :id, :uppercase_letters, :lowercase_letters, :english_phonetics, :chinese_phonetics, :meanings, :alphabetical, :origins, :dialects, :themes, :types, :paths, :styles, :is_vowel, :is_consonant, :is_unvoiced, :is_voiced, :is_accent
end
