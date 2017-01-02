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
    let dates = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    };

    let month = dates[date.slice(5, 7)];
    return `${month}, ${date.slice(0, 4)}`;
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
