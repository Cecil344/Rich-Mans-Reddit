import React, { Component } from 'react';
import { connect } from 'react-redux';


class List extends Component {

    render() {

        return(
            <article>
                <section>

                        <h3> {this.props.posts.title}</h3>

                        <img src={this.props.posts.thumbnail} />
                        <a href={this.props.posts.url}>Click here</a>
                </section>
            </article>
        );
    }


}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps)(List);
