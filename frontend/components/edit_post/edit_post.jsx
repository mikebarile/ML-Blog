import React from 'react';
import { Link } from 'react-router';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.post.id,
      "title": this.props.post.title,
      "body": this.props.post.body
    };
    this.textUpdate = this.textUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitAppearance = this.handleSubmitAppearance.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  componentDidUpdate() {
    if (this.props.currentUser === null || this.props.currentUser.id !== this.props.post.user_id){
      this.props.router.replace(`/blog/${this.props.post.id}`);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.post.id,
      "title": nextProps.post.title,
      "body": nextProps.post.body
    });
  }

  textUpdate(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit() {
    if (this.state.title !== "" && this.state.body !== "") {
      this.props.editPost(this.state);
      this.props.router.push(`/blog/${this.props.post.id}`);
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
          <span className="apf-headline">edit your blog post</span>
        </div>

        <div className="add-post-form">
          <div className="apf-col">
            <div className="apf-form">
              <span className="apf-field-title">Post title</span>
              <textarea
                ref="titleField"
                className="apf-text-full apf-title-input"
                onChange={this.textUpdate("title")}
                value={this.state.title}>
              </textarea>

              <span className="apf-field-title">Post body</span>
              <textarea
                ref="bodyField"
                className="apf-text-full apf-body-input"
                onChange={this.textUpdate("body")}
                value={this.state.body}>
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

export default EditPost;
