import React from "react"
import PropTypes from "prop-types"
class DeletePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      user_id: this.props.user.id
   };
  }
//for reference { data:@posts, user:current_user}

  handleChange = (event) => {
    this.setState({message: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A message was posted: ' + this.state.message);
    let that = this
    fetch('http://localhost:3000/posts/${id}', {
        method: 'DELETE',
        // We convert the React state to JSON and send it as the POST body
        headers: {
          'Content-Type': 'application/json',
       },
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        that.props.collectData();
      });

    event.preventDefault();
}

  render() {
    return (
      <div class='delete-post' onClick={() => this.handleSubmit()}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}
const e = React.createElement;
const domContainer = document.getElementById('indiv-post-delete');
// ReactDOM.render(e(DeletPost), domContainer);

export default DeletePost
