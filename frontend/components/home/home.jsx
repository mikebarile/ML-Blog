import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {

  }

  render() {
    return(
      <div className="home">
        <span>HELLO WORLD</span>
      </div>

    );
  }
}

export default Home;
