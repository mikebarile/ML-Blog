# Magic Leap Blog

[Magic Leap Blog live][site]

[site]: https://magic-leap-blog.herokuapp.com/#/blog

![Magic Leap Blog Homepage](https://res.cloudinary.com/dsguwnfdw/image/upload/v1483399887/Screen_Shot_2017-01-02_at_3.30.57_PM_niwlhp.png)

Magic Leap Blog is a full-stack web application that closely mirrors Magic Leap's actual web blog. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the front end. The application also utilizes Webpack and ES6. As a bonus, I hand rolled my user authentication system and HTML/CSS from scratch.

## Features & Implementation

### Home page

  Magic Leap Blog is split into three tables: users, posts, and comments. Upon entering the site, the app immediately queries the database to pull abbreviated versions of all blog posts stored on the server. The full version of each of these blog posts is accessible through a "show" page by clicking the "read more" button below the post.

  At the top of the page, there is a navigation bar that dynamically renders based on whether a user has logged in. The login button renders a modal to the page which enables user login and signup. When the user is logged in, an "add a post" button appears that navigates the user to the "add a post" page.

  I was able to keep the code for the home page light by building a separate "post_item" React component. I've included code for the home screen below; note that it doesn't include the top bar and footer which are rendered across all pages.
  ```
  <div className="home">
    <div className="blog-header">
      <span className="blog-headline">the answers to all your questions</span>
      <span className="blog-headline">(ok, some of your questions)</span>
    </div>

    <div className="blog-list">
      {posts.map((post, idx) =>
        <PostItem key={idx} post={post}/>
      )}
    </div>
  </div>
  ```

### Post 'show' page

  The 'show' pages for each post are significantly more complex than the home page. Structurally, the show page is divided into three components:
  1. Pink header
  2. Actual post
  3. Comments section

  The pink header and post sections are very similar to the host page. The key differences are that the header renders the title of the post and the post includes the full post vs. the abbreviated version found on the home page. In addition, if the author is logged in, the author's name disappears from the post and is replaced with buttons that allow the author to edit or delete the post. Both of these functions are handled through full Redux loops and make use of the server's API. The edit button sends the user to a separate "edit" page; this page automatically navigates the user back to the home page if they aren't the author. For added security, all patch and destroy requests are authenticated in the back end using my hand rolled authentication system.

  The comments section at the bottom displays every comment associated with a post. Any logged in user can make a comment. If there is no user logged in, a "login to comment" button appears and opens the login modal when clicked. If the user is logged in, an "add a comment" appears which renders additional html below when clicked.

  Each comment includes the created_at date, the author's name, and a body. If the comment's author is the user, "edit" and delete" buttons appear to the right of the comment. These function similarly to the edit and delete buttons for posts except that the edit button enables the author to edit in line instead of navigating to a separate "edit" page.

  ![Comments Section](https://res.cloudinary.com/dsguwnfdw/image/upload/v1483403137/Screen_Shot_2017-01-02_at_4.25.22_PM_lijcz7.png)

### Hand rolled user authentication
  I hand rolled my own user authentication for Magic Leap Blog. It saves user login information as cookies and leverages BCrypt to handle passwords and SecureRandom to handle session tokens. To help illustrate, I've included the code for my "User" model below:

  ```
  class User < ActiveRecord::Base
    validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    has_many :links
    has_many :comments

    has_many :posts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Post

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      return nil unless user && user.valid_password?(password)
      user
    end

    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_token!
      self.session_token = SecureRandom.urlsafe_base64(16)
      self.save!
      self.session_token
    end

    private
    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64(16)
    end
  end
  ```

## Future Direction for the Project
  There are several improvements that could be made to my project. Perhaps the biggest improvement I could make would be to spend time refactoring. There are several major areas where I could DRY up my code including:
  - Move CSS to SASS
  - Migrate modal JS logic to a utility file
  - General cleanup of unnecessary clutter

  There are also several third-party services that could be incorporated into the app. For example, I could integrate a third-party user authentication to replace my hand-rolled auth system. I could also integrate analytics platforms like New Relic.
