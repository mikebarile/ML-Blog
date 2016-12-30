import React from 'react';
import { Link } from 'react-router';

class ShowPost extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.title);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    let post = this.props.post.currentPost;

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
              <div className="pi-author-row">
                <span className="pi-by">by</span>
                <span className="pi-author">{post.first_name.toLowerCase()} {post.last_name.toLowerCase()}</span>
              </div>
              <span className="pi-body">{post.body}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPost;
