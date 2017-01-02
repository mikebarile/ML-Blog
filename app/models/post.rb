class Post < ActiveRecord::Base
  validates :body, :title, :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :comments,
  primary_key: :id,
  foreign_key: :post_id,
  class_name: :Comment

end
