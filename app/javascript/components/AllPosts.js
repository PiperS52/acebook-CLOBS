import React from "react"

class AllPosts extends React.Component {

  render(){
    console.log(this.props.posts)
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
                <input type="submit" value="❤" />
              </div>
              <div class='indiv-post-body'>
                {post.message}
              </div>
              <div class='indiv-post-footer'>
                posted at:  {post.created_at}
              </div>
            </div>)}
        </ul>
      </div>
      )
    }
  }

export default AllPosts

  