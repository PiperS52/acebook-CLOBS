import React from "react"
import Moment from 'react-moment';
import moment from 'moment';

class AllPosts extends React.Component {

  render(){
    console.log(this.props.posts)
    return(
      <div>
        <h1>All posts:
        <ul>

          {this.props.posts.map((post) => <li>{post.message}
          posted at: {moment(post.created_at).format("MMMM Do YYYY, h:mm:ss a")} {post.user_id}</li>)}
        </ul>

        </h1>
      </div>
      )
    }
  }

export default AllPosts


// commands:
// npm install --save moment react-moment
// npm i moment --save 
