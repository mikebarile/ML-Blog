import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      id: this.props.comment.id,
      post_id: this.props.comment.post_id,
      body: this.props.comment.body
    };
    this.handleDate = this.handleDate.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.textUpdate = this.textUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitAppearance = this.handleSubmitAppearance.bind(this);
  }

  handleDate(date) {
    let dateStamp = date.slice(0, 10);
    let timeStamp = date.slice(11, 19);
    date = `${dateStamp} ${timeStamp} UTC`;
    date = new Date(date);

    let months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    ];

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  renderRow() {
    if (this.props.currentUser && this.props.currentUser.id === this.props.comment.user_id) {
      return "pi-row pi-live";
    }
    else {
      return "pi-row pi-live";
    }
  }

  handleEdit() {
    this.setState({
      showEdit: !this.state.showEdit
    });
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment.id);
  }

  textUpdate(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit() {
    // if (this.state.title !== "" && this.state.body !== "") {
    //   this.props.createPost(this.state);
    //   this.props.router.push('/blog');
    // }
  }

  handleSubmitAppearance() {
    if (this.state.title !== "" && this.state.body !== "") {
        return "apf-submit";
    }
    else {
      return "apf-submit-dead";
    }
  }

  render() {
    let post = this.props.post;
    let comment = this.props.comment;

    return (
      <div className="spc-comment">
        <div className="spcc-header-row">
          <div className="spcc-header-col">
            <div className="spcc-buttons-row">
              <span className="spcc-name">{comment.first_name.toLowerCase()} {comment.last_name.toLowerCase()}</span>
              <div className={this.renderRow()}>
                <span className="pi-button spcc-button" onClick={this.handleEdit}>edit</span>
                <span className="pi-crud-text spcc-button">|</span>
                <span className="pi-button spcc-button" onClick={this.handleDelete}>delete</span>
              </div>
            </div>
            <span className="spcc-date">{this.handleDate(comment.created_at)}</span>
          </div>
        </div>
        <div className="spcc-body">
          {comment.body}
        </div>
      </div>
    );
  }
}

export default withRouter(Comment);
