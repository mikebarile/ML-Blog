import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import Comment from './comment';
import Modal from 'boron/FadeModal';
import SignupForm from '../user_form/user_form_container';
import LoginForm from '../session_form/session_form_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreate: false,
      commentBody: "",
      errors: [],
      switch: false
    };
    this.showLoginModal = this.showLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);
    this.showSignupModal = this.showSignupModal.bind(this);
    this.hideSignupModal = this.hideSignupModal.bind(this);
    this.switchToLogin = this.switchToLogin.bind(this);
    this.switchToSignup = this.switchToSignup.bind(this);
    this.setSwitch = this.setSwitch.bind(this);

    this.handleAddCommentClick = this.handleAddCommentClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddAComment = this.handleAddAComment.bind(this);
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
    if (this.props.currentUser) {
      this.setState({showCreate: !this.state.showCreate});
    }
    else {
      this.showLoginModal();
    }
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
        errors: []
      });
    }
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  handleAddAComment() {
    if (this.props.currentUser && !this.state.showCreate) {
      return "spc-add-comment-button-live";
    }
    else if (this.props.currentUser && this.state.showCreate) {
      return "spc-hide-button-live";
    }
    else {
      return "spc-add-comment-button-dead";
    }
  }

  handleCreateComment() {
    if (this.state.showCreate === false || !this.props.currentUser) {
      return <div></div>;
    }
    return (
      <div className="spc-create-comment">
        <div className="spc-create_reivew_container">
          <ul className="alf-errors">
            {this.state.errors.map((error, idx) => (
              <span key={idx} className="alf-error">{error}</span>
            ))}
          </ul>
          <textarea
            ref="bodyField"
            placeholder="Share your thoughts here!"
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
      <Comment
        key={idx}
        comment={comment}
        currentUser={this.props.currentUser}
        editComment={this.props.editComment}
        deleteComment={this.props.deleteComment}
      />
    ));
    return comments;
  }

  showLoginModal() {
    this.refs.loginModal.show();
  }

  hideLoginModal() {
    this.refs.loginModal.hide();
  }

  showSignupModal() {
    this.refs.signupModal.show();
  }

  hideSignupModal() {
    this.refs.signupModal.hide();
  }

  switchToLogin() {
    if (this.state.switch === true){
      this.setState({switch: false});
      this.showLoginModal();
    }
    this.props.clearErrors();
  }

  switchToSignup() {
    if (this.state.switch === true){
      this.setState({switch: false});
      this.showSignupModal();
    }
    this.props.clearErrors();
  }

  setSwitch() {
    this.setState({switch: true});
  }

  render() {
    let post = this.props.post;
    let comments = post.comments;
    return (
      <div className="sp-comments">
        <div className="sp-first-col">
          <div className="spc-header-row" >
            <span className="spc-comments-header">{this.handleCommentCount(this.props.post.comments.length)}</span>
            <button className={this.handleAddAComment()} onClick={this.handleAddCommentClick}></button>
            <Modal
              className="user-modal"
              ref="loginModal"
              keyboard={true}
              onHide={this.switchToSignup}>
              <LoginForm hideLoginModal={this.hideLoginModal} switch={this.setSwitch}/>
            </Modal>
            <Modal
              className="user-modal"
              ref="signupModal"
              keyboard={true}
              onHide={this.switchToLogin}>
              <SignupForm hideSignupModal={this.hideSignupModal} switch={this.setSwitch}/>
            </Modal>
          </div>
          {this.handleCreateComment()}
          {this.handleComments()}
        </div>
      </div>
    );
  }
}

export default withRouter(Comments);
