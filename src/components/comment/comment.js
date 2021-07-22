import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'

class Comment extends Component {
    render() {
        let {comment, match: {url}}= this.props
        return (
            <div>
                {comment.id}---{comment.name}--<Link to={url+'/'+comment.id}>comment details</Link>
            </div>
        );
    }
}

export default withRouter(Comment) ;
