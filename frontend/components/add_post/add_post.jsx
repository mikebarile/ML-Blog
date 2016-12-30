import React from 'react';
import { Link } from 'react-router';

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "title": "",
      "body": "",
      user_id: null,
    };
    this.textUpdate = this.textUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitAppearance = this.handleSubmitAppearance.bind(this);
  }

  componentDidMount() {
    this.setState({user_id: this.props.currentUser.id});
  }

  componentDidUpdate() {
    if(this.props.currentUser === null){
      this.props.router.replace('/blog');
    }
  }

  textUpdate(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit() {
    if (this.state.title !== "" && this.state.body !== "") {
      this.props.createPost(this.state);
      this.props.router.push('/blog');
    }
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
    let user = this.props.currentUser;
    return (
      <div className="add-post">

        <div className="apf-header">
          <span className="apf-headline">add a blog post</span>
        </div>

        <div className="add-post-form">
          <div className="apf-col">
            <div className="apf-form">
              <span className="apf-field-title">Post title</span>
              <textarea
                ref="titleField"
                className="apf-text-full"
                onKeyUp={this.textUpdate("title")}>
              </textarea>

              <span className="apf-field-title">Post body</span>
              <textarea
                ref="bodyField"
                className="apf-text-full apf-body-input"
                onKeyUp={this.textUpdate("body")}>
              </textarea>
            </div>

            <div className="apf-nav">
              <button className={this.handleSubmitAppearance()} onClick={this.handleSubmit}>SUBMIT</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AddPost;
