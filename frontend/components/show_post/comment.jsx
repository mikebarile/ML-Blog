import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleDate = this.handleDate.bind(this);
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

  render() {
    let post = this.props.post;
    let comment = this.props.comment;

    return (
      <div className="spc-comment">
        <div className="spcc-header-row">
          <div className="spcc-header-col">
            <span className="spcc-name">{comment.first_name.toLowerCase()} {comment.last_name.toLowerCase()}</span>
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
