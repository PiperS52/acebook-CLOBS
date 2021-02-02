import React from "react"

class AllPosts extends React.Component {

  render(){
    console.log(this.props.posts)
    return(
      <div>
        <h1>All posts:
        <ul> 

          {this.props.posts.map((post) => <li>{post.message} (posted at:  {post.created_at}) {post.username}</li>)}
        </ul>
      
        </h1>
      </div>
      )
    }
  }

export default AllPosts

  