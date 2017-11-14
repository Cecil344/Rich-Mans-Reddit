import React, { Component } from 'react';
import Grid from './Grid';
import List from './List'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

class App extends Component {
  render() {

    const postListItems=this.props.posts.map((post) => (
      <div className="Post">
            <List post={post} key={post.title}/>
        </div>

  ));
     const postGridItems = this.props.posts.map((post) => (
        <div className="Grid" >
            <Grid post={post} key={post.thumnail}/>
        </div>
    ));




   return (
    <Router>

      <div className="App">
        <header>
          <h1>Rich Man's Reddit </h1>
          <h2>What view would you like?: {' '}
              {/* <Link to="/Grid">Grid View </Link>{' '} */}
              <Link to="/List">List View</Link></h2>
        </header>
        <List />

      <div>
        <Switch>
          {/* <Route path = "/Grid" render= {() => ( */}
              {/* <div className="Grid1">
                {postGridItems}
              </div>
          )}/> */}

          <Route path = "/List" render ={() => (
              <div className = "list">
                {postListItems}
              </div>
          )}/>


          <Redirect to="/" />
        </Switch>
      </div>
</div>
    </Router>
    );
  }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(App);
