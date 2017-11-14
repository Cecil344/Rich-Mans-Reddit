import React, { Component } from 'react';

import { connect } from 'react-redux';

class Grid extends Component {

    render() {

        return(
            <article>
                <section>

          <a href={this.props.post.url}><img className="Image" src={this.props.post.thumbnail}/></a>
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

export default connect(mapStateToProps)(Grid);
