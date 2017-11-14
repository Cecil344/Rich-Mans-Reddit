import React, { Component } from 'react';
import RedditData from '../reducers';
import { connect } from 'react-redux';


class List extends Component {

    render() {

        return(
            <article>
                <section>

                        {/* <h3> {this.props.post.title}</h3>
                        <img src={this.props.post.thumbnail} />
                        <a href={this.props.post.url}>Click here</a> */}
                        <p>Hi</p>
                </section>
            </article>
        );
    }


}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(List);
