import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return(
      <div className="home">
        <div className="blog-header">
          <span className="blog-headline">the answers to all your questions</span>
          <span className="blog-headline">(ok, some of your questions)</span>
        </div>

        <div className="blog-list">

        </div>
      </div>
    );
  }
}

export default Home;
