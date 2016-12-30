import React from 'react';
import { Link } from 'react-router';
import PostItem from './post_item';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    let posts = this.props.allPosts;

    return(
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
    );
  }
}

export default Home;
