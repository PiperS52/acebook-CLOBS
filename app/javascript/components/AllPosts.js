import React from "react"

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
    console.log(this.state)
    return(
      <div class='post-container'>
        <div class='all-posts-head'>
          <h1>All posts:</h1>
        </div>
        <ul> 
          {this.props.posts.map((post) => 
            <div class='indiv-post'>
              <div class='indiv-post-head'>
                {post.username}
              </div>
              <div class='indiv-post-body'>
                {post.message}
              </div>
              <div class='indiv-post-footer'>
                posted at:  {post.created_at}
                <input type="submit" value="❤" />
              </div>
            </div>)}
        </ul>
      </div>
      )
    }
}

export default AllPosts

  