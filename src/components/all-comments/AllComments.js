import React, {Component} from 'react';
import CommentsService from "../../services/commentsService";
import Comment from "../comment/comment";
import {Route, Switch, withRouter} from 'react-router-dom'
import FullComment from "../FullComment/FullComment";

class AllComments extends Component {

    state = {comments: []};
    commentService = new CommentsService();

    render() {
        let {comments} = this.state
        let {match: {url}} = this.props
        comments = comments.filter(value => value.id <= 10)
        return (
            <div>
                {comments.map(value => <Comment comment={value} key={value.id}/>)}
                <hr/>
                <Switch>
                    <Route path={url + "/:id"} render={props => {
                        let{match:{params:{id}}}=props
                       return <FullComment id={id} key={id} />
                    }}/>}

                </Switch>
<hr/>
            </div>
        );
    }

    async componentDidMount() {
        this.setState({comments: await this.commentService.comments()})
    }

}

export default withRouter(AllComments);
