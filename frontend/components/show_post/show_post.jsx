import React from 'react';
import { Link } from 'react-router';
import Comments from './comments';

class ShowPost extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  renderRow(type) {
    if (type === "author"){
      if (this.props.currentUser && this.props.currentUser.id === this.props.post.user_id) {
        return "pi-row pi-dead";
      }
      else {
        return "pi-row pi-live";
      }
    }
    else {
      if (this.props.currentUser && this.props.currentUser.id === this.props.post.user_id) {
        return "pi-row pi-live";
      }
      else {
        return "pi-row pi-dead";
      }
    }
  }

  handleDelete() {
    this.props.deletePost(this.props.post.id);
    this.props.router.push('/blog');
  }

  handleEdit() {
    this.props.router.push(`/blog/${this.props.post.id}/edit`);
  }

  render() {
    let post = this.props.post;

    if (post.created_at === "") {
      return (
        <div></div>
      );
    }

    let date = post.created_at;
    let months = [ "jan", "feb", "mar", "apr", "may", "june",
    "july", "aug", "sep", "oct", "nov", "dec" ];
    let day = date.substring(8, 10);
    let year = date.substring(0, 4);
    let month = months[parseInt(date.substring(5, 7), 10)-1];

    return(
      <div className="home">
        <div className="blog-header">
          <span className="blog-headline">{post.title.toUpperCase()}</span>
        </div>

        <div className="blog-list">
          <div className="post-item">
            <div className="pi-date-col">
              <span className="pi-day">{day}</span>
              <span className="pi-month">{month}</span>
              <span className="pi-year">{year}</span>
            </div>

            <div className="pi-body-col">
              <span className="pi-title">{post.title.toLowerCase()}</span>
              <div className={this.renderRow("author")}>
                <span>by</span>
                <span className="pi-author">{post.first_name.toLowerCase()} {post.last_name.toLowerCase()}</span>
              </div>
              <div className={this.renderRow("buttons")}>
                <span className="pi-button" onClick={this.handleEdit}>edit post</span>
                <span className="pi-crud-text">|</span>
                <span className="pi-button" onClick={this.handleDelete}>delete post</span>
              </div>
              <span className="pi-body">{post.body}</span>
            </div>
          </div>
        </div>

        <Comments
          post={this.props.post}
          currentUser={this.props.currentUser}
          createComment={this.props.createComment}
        />
      </div>
    );
  }
}

export default ShowPost;
