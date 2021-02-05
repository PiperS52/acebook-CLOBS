import React from "react"
import PropTypes from "prop-types"

class DeletePost extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  handleSubmit = (event) => {
    // alert('A message was posted: ' + this.state.message);
    let that = this
    fetch(`http://localhost:3000/posts/${this.props.post_id}`, {
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

    // event.preventDefault();
}

  render() {
    return (
      <div className='delete-post' >
        <button onClick={() => this.handleSubmit()}>
          Delete
        </button>
      </div>
    );
  }
}
// const e = React.createElement;
// const domContainer = document.getElementById('indiv-post-delete');
// ReactDOM.render(e(DeletPost), domContainer);

export default DeletePost
