import React from "react"
import AllPosts from "./AllPosts.js"
import NewPost from "./NewPost"
import DeletePost from "./DeletePost"
import PropTypes from "prop-types"
class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.collectData = this.collectData.bind(this);
    this.allPostsElement = React.createRef();
    console.log('inside mycomponent')
    console.log(this.props)
  }

  //this is called 2nd - retrieving data
  componentDidMount() {
      this.collectData();
  }

  collectData() {
    fetch('http://localhost:3000/posts/data', {
        method: 'GET',
      }).then((response) => {
        return response.json()
      }).then((response) => {
        console.log("inside second then")
        console.log(response)
        this.setState({ data: response },
        this.allPostsElement.current.updatePosts(response))
      })
  }

  render () {
    return (
      <React.Fragment>
        <NewPost collectData={this.collectData} user={this.props.user}/>
        <AllPosts ref={this.allPostsElement} posts={this.props.data} user={this.props.user}/>
      </React.Fragment>
    );
  }
}

export default MyComponent
