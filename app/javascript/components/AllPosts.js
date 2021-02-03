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
      <div>
        <h1>All posts:
          <ul>
            {this.state.posts.map((post) => <li>{post.message} (posted at:  {post.created_at}) {post.user_id}</li>)}
          </ul>
        </h1>
      </div>
      )
    }
}

export default AllPosts

  