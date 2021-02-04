import React from "react"

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        likesArray: [],
        liked: false,
        likable_id: this.props.likable_id,
        user_id: this.props.user_id,
        likable_type: "Post",
        likeCount: 0
    }
}

  handleClick = () => {
        if(this.state.liked == true) {
          this.handleUnlike()
        } else {
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
  }

  handleUnlike = () => {
    console.log("inside handleUnlike")
    this.setState({
        liked: false,
        likeCount: this.state.likeCount -=1
    })
    fetch(`http://localhost:3000/posts/${this.props.likable_id}/likes/${this.state.user_id}` , {
        method: 'DELETE',
        // We convert the React state to JSON and send it as the POST body
        headers: {
          'Content-Type': 'application/json',
       }
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
      response.map((like) => {
      if (like.user_id === that.state.user_id) {
          that.setState({
              liked: true
          })
      }
    })
      that.setState({
        likeCount: response.length,
        likesArray: response
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