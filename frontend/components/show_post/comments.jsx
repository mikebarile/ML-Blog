import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import Comment from './comment';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreate: false,
      commentBody: "",
      errors: []
    };
    this.handleAddCommentClick = this.handleAddCommentClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWriteAReview = this.handleWriteAReview.bind(this);
    this.update = this.update.bind(this);
    this.handleCreateComment = this.handleCreateComment.bind(this);
    this.handleComments = this.handleComments.bind(this);
  }

  handleCommentCount(count) {
    if (count === 0 || count === null || count === undefined) {
      return "no comments";
    }
    else if (count === 1) {
      return "1 comment";
    }
    else {
      return `${count} comments`;
    }
  }

  handleAddCommentClick(e) {
    e.preventDefault();
    this.setState({showCreate: true});
  }

  handleSubmit(e) {
    if (this.props.currentUser === null || this.props.currentUser.id === null) {
      return(this.setState({errors: ["Please log in to add a comment"]}));
    }
    if (this.state.commentBody === "") {
      return(this.setState({errors: ["Comment body can't be blank"]}));
    }
    else {
      this.props.createComment({
        body: this.state.commentBody,
        post_id: this.props.post.id,
      });
      this.setState({
        showCreate: false,
        commentBody: "",
        rating: null,
        errors: []
      });
    }
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  handleWriteAReview() {
    if (this.props.currentUser) {
      return "spc-add-comment-button-live";
    }
    else {
      return "spc-add-comment-button-dead";
    }
  }

  handleCreateComment() {
    if (this.state.showCreate === false) {
      return <div></div>;
    }
    return (
      <div className="spc-create-comment">
        <span className="spc-create-comment-title">Add a comment</span>
        <div className="spc-create_reivew_container">
          <ul className="alf-errors">
            {this.state.errors.map((error, idx) => (
              <span key={idx} className="alf-error">{error}</span>
            ))}
          </ul>
          <select className="spc-create-rating" onChange={this.update("rating")}>
              <option defaultValue value="">Please select an option </option>
              <option value='1'>1 star</option>
              <option value='2'>2 stars</option>
              <option value='3'>3 stars</option>
              <option value='4'>4 stars</option>
              <option value='5'>5 stars</option>
            </select>
          <textarea
            ref="bodyField"
            placeholder="Leave a comment to help other dogowners find a great vacation spot for their pooch!"
            className="spc-comment-body"
            onChange={this.update("commentBody")}>
          </textarea>
          <button onClick={this.handleSubmit} className="spc-submit-comment">Submit</button>
        </div>
      </div>
    );
  }

  handleComments() {
    let comments = [];
    if (this.props.post.comments === undefined) {
      return (<div></div>);
    }
    comments = this.props.post.comments.map((comment, idx) => (
      <Comment key={idx} comment={comment}/>
    ));
    return comments;
  }

  render() {
    let post = this.props.post;
    let comments = post.comments;
    return (
      <div className="sp-comments">
        <div className="sp-first-col">
          <div className="spc-header-row" >
            <span className="spc-comments-header">{this.handleCommentCount(post.count_comments)}</span>
            <button className={this.handleWriteAReview} onClick={this.handleAddCommentClick}>Write a comment</button>
          </div>
          {this.handleCreateComment()}
          {this.handleComments()}
        </div>
      </div>
    );
  }
}

export default withRouter(Comments);
