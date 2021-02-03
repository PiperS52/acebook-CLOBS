import React from "react"

class LikeButton extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        liked: false,
        likable_id: this.props.likable_id,
        user_id: this.props.user_id,
        likable_type: "Post"
    }
}
  handleClick = () => {
        this.setState({
            liked: true
        })
        fetch(`http://localhost:3000/posts/${this.props.likable_id}/likes`, {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            headers: {
              'Content-Type': 'application/json',
           },
            body: JSON.stringify(this.state)
          }).then(function(response) {
            console.log(response)
          });
    
  }

  render () {
    return(
     
              <div class='like-button'>
        
                <button onClick={this.handleClick}>❤</button>
       
            </div>)
   
      
    }
}

export default LikeButton
