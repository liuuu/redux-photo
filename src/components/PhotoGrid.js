import React, { Component } from "react";
import Photo from "./Photo.js";
import { connect } from "react-redux";
import * as actions from "../actionCreators/actions.js";
import Main from "./Main";

class PhotoGrid extends Component {
  render() {
    console.log("photogrid", this.props);
    const props = this.props;
    return (
      <div>
        <Main />
        <div className="photo-grid">
          {this.props.posts.map((post, i) =>
            <Photo key={i} i={i} post={post} {...props} />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

export default connect(mapStateToProps, actions)(PhotoGrid);
