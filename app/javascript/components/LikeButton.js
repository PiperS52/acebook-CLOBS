import React from "react"

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        liked: false,
        likable_id: this.props.likable_id,
        user_id: this.props.user_id,
        likable_type: "Post",
        likeCount: 0
    }
}

  handleClick = () => {
        if(this.state.liked === true) {
          return
        }
        this.setState({
            liked: true,
            likeCount: this.state.likeCount +=1
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

  componentDidMount() {
    let that = this
    fetch(`http://localhost:3000/posts/${this.props.likable_id}/find_likes`, {
      method: 'GET',
    }).then(function(response) {
      console.log('LOOK HERE')
      return response.json()
    }).then(function(response){
      console.log(response)
      that.setState({
        likeCount: response.length
      })
    })
  }

  render () {
    return(
          <div className='like-button'>
            <button onClick={this.handleClick}>❤ Likes: {this.state.likeCount}</button>
          </div>)
    }
}

export default LikeButton