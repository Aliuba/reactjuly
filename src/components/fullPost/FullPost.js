import React, {Component} from 'react';
import PostService from "../../services/postService";

class FullPost extends Component {
    state={post:null}
   postService=new PostService()
    render() {
        let {post}=this.state
        return (
            <div>
                {post&&<div>{post.id}--{post.title}--{post.body}</div>}
            </div>
        );
    }
    async componentDidMount() {
        const id=this.props.postId
        const post= await this.postService.post(id)
        this.setState({post})
    }
}

export default FullPost;
