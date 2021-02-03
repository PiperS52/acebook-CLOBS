import React from "react"
import PropTypes from "prop-types"
class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: '',
      user_id: this.props.user.id
   };
  }

  handleChange = (event) => {
    this.setState({message: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A message was posted: ' + this.state.message);
    let that = this
    fetch('http://localhost:3000/posts', {
        method: 'POST',
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
      <form className='new-post' onSubmit={this.handleSubmit}>
        <label>
          message:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewPost
