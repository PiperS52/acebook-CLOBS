import React from "react"
import Moment from 'react-moment';
import moment from 'moment';
import DeletePost from './DeletePost.js'
import LikeButton from './LikeButton.js'

class AllPosts extends React.Component {
  constructor(props) {
    super(props)
    this.updatePosts = this.updatePosts.bind(this)
    this.state = {
      posts: this.props.posts
    }
  }

  updatePosts(data) {
    this.setState({
      posts: data
    })
  }

  render () {
    return(
      <div className='post-container'>
        <div className='all-posts-head'>
          <h1>Post Feed</h1>
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
                <LikeButton likable_id={post.id} user_id={this.props.user.id}/>
              </div>
              <div >
                <DeletePost post_id={post.id} collectData={this.props.collectData}/>
              </div>
            </div>)}
        </ul>
      </div>
      )
    }

}

export default AllPosts
