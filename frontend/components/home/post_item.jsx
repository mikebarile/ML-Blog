import React from 'react';
import { Link, withRouter } from 'react-router';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.router.push(`/blog/${this.props.post.id}`);
  }

  render() {
    let post = this.props.post;

    if (post === null || post === undefined) {
      return ( <div></div> );
    }

    else {
      let date = post.created_at;
      let dateStamp = date.slice(0, 10);
      let timeStamp = date.slice(11, 19);
      date = `${dateStamp} ${timeStamp} UTC`;
      date = new Date(date);

      let months = [ "jan", "feb", "mar", "apr", "may", "june",
      "july", "aug", "sep", "oct", "nov", "dec" ];
      let day = date.getDate();
      let month = months[date.getMonth()];
      let year = date.getFullYear();

      return (
        <div className="post-item">
          <div className="pi-date-col">
            <span className="pi-day">{day}</span>
            <span className="pi-month">{month}</span>
            <span className="pi-year">{year}</span>
          </div>

          <div className="pi-body-col">
            <span className="pi-title">{post.title.toLowerCase()}</span>
            <div className="pi-row pi-live">
              <span className="pi-by">by</span>
              <span className="pi-author">{post.first_name.toLowerCase()} {post.last_name.toLowerCase()}</span>
            </div>
            <span className="pi-body">{post.body}</span>
            <button className="pi-read-more" onClick={this.handleClick}>READ MORE</button>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(PostItem);
