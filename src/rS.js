import Navigation from "./navigation";
import TextList from './textList';
import BottomNavigation from './bottomNavigation'
import React from 'react';
import {
  Paper,
  RaisedButton
} from 'material-ui';
import {
  connect
} from 'react-redux'
import {
  Link
} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const style = {
  paper: {
    margin: 10,
    width: 100,
    display: 'inline-block'
  },
  button: {
    margin: 20
  }
}
class ReadS extends React.Component {
  renderList(post) {
    let list = []
    let index = 0
    for (let node in post.items) {
      list.push(<TextList items={post.items[node]} listkey={node}/>)
      index++
    }
    return list
  }
  render() {
    const {
      dispatch,
      post
    } = this.props
    return (
      <MuiThemeProvider>
        <div>
        <Navigation />
        {this.renderList(post)}
        <BottomNavigation />
        </div>
      </MuiThemeProvider>
    )
  }
}

function select(state) {
  return {
    post: state.post
  }
}
export default connect(select)(ReadS);