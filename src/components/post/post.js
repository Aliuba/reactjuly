import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'

class Post extends Component {

    render() {
        let {post}= this.props
        const {match:{url}}=this.props
        return (
            <div>

                {post.userId}--{post.id}--<Link to={url+'/'+post.id}>details about this post</Link>

            </div>
        );
    }
}

export default withRouter (Post);
