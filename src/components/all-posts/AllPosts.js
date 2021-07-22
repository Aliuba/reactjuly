import React, {Component} from 'react';
import PostService from "../../services/postService";
import Post from "../post/post";
import {Route, Switch, withRouter} from "react-router-dom";
import FullPost from "../fullPost/FullPost";

class AllPosts extends Component {
    state = {posts: []}
    postService = new PostService();

    render() {
        let {posts} = this.state
        const {match: {url}} = this.props;
        let New = posts.filter(value => value.id < 20);
        return (
            <div>
                {New.map(value => <Post post={value} key={value.id}/>)}
                <hr/>
                <div>
                    <Switch>
                        <Route path={url + "/:id"} render={(props) => {
                            const {match: {params: {id}}} = props
                            return <FullPost postId={id} key={id}/>

                        }}/>
                    </Switch>
                </div>
            </div>

        );

    }

    async componentDidMount() {
        this.setState({posts: await this.postService.posts()})

    }
}

export default withRouter(AllPosts) ;
