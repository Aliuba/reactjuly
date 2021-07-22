import React, {Component} from 'react';
import CommentsService from "../../services/commentsService";

class FullComment extends Component {
    commentService = new CommentsService()
    state = {comment: null}

    render() {

        let {comment} = this.state
        return (
            <div>
                {comment && <div>{comment.id}--{comment.email} </div>}
            </div>
        );
    }

    async componentDidMount() {
        const {id} = this.props
        const comment = await this.commentService.comment(id)
        this.setState({comment})

    }
}

export default FullComment;
