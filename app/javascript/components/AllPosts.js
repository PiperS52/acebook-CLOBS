import React from "react"
import Moment from 'react-moment';
import moment from 'moment';
import LikeButton from './LikeButton.js'

class AllPosts extends React.Component {
  constructor(props) {
    super(props)
    this.updatePosts = this.updatePosts.bind(this)
    console.log('inside AllPosts')
    console.log(this.props.posts)
    this.state = {
      posts: this.props.posts
    }
  }

  updatePosts(data) {
    this.setState({
      posts: data
    })  
    console.log('inside updatePosts')
    console.log(this)
    console.log(this.state)
  }

  render () {
    console.log('inside render')
    console.log(this.state.posts)
    return(
      <div className='post-container'>
        <div className='all-posts-head'>
          <h1>All posts:</h1>
        </div>
        <ul> 
          {this.state.posts.map((post) => 
            <div className='indiv-post'>
              <div className='indiv-post-head'>
                {post.username}
              </div>
              <div className='indiv-post-body'>
                {post.message}
              </div>
              <div className='indiv-post-footer'>
                posted at: {moment(post.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                < LikeButton likable_id={post.id} user_id={this.props.user.id}/>
              </div>
            </div>)}
        </ul>
      </div>
      )
    }

}

export default AllPosts