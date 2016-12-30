import React from 'react';
import { Link } from 'react-router';

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "title": 50,
      "body": 500,
      title_input: "",
      body_input: "",
      user_id: null,
    };
    this.textUpdate = this.textUpdate.bind(this);
    this.handleCounter = this.handleCounter.bind(this);
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

  textUpdate(field, max) {
    return (e) => {
      e.target.style.height = "0px";
      e.target.style.height = (e.target.scrollHeight + 1)+"px";
      this.setState({[field]: max - e.target.value.length});
    };
  }

  handleCounter(field, min) {
    if (this.state[field] <= min) {
      return `apf-${field}-counter apf-low`;
    }
    else {
      return `apf-${field}-counter`;
    }
  }

  handleSubmit() {
    console.log("test");
  }

  handleSubmitAppearance() {
    if (this.state.title < 50 && this.state.title >=0 &&
      this.state.body < 500 && this.state.body >= 0 &&
      this.state.url !== null && this.state.image_errors.length === 0) {
        return "apf-next";
    }
    else {
      return "apf-next-dead";
    }
  }

  render() {
    let user = this.props.currentUser;
    return (
      <div className="add-post-form">
        <div className="apf-first-half">
          <div className="apf-col-first">
            <div className="apf-form">
              <span className="apf-field-title">Post title</span>
              <div className="apf-input-row">
                <textarea
                  ref="titleField"
                  className="apf-text-full"
                  onKeyUp={this.textUpdate("title", 50)}>
                </textarea>
                <span className={this.handleCounter("title", 10)}>{this.state.title}</span>
              </div>

              <span className="apf-field-title">Post body</span>
                <div className="apf-input-row">
                  <textarea
                    ref="bodyField"
                    className="apf-text-full"
                    onKeyUp={this.textUpdate("body", 500)}>
                  </textarea>
                  <span className={this.handleCounter("body", 50)}>{this.state.body}</span>
                </div>
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
