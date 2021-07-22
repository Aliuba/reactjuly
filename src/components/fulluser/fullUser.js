import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import UserService from "../../services/userService";

class FullUser extends Component {
    userService = new UserService();
    state = {user: null, id: this.props.match.params.id};



    render() {
        console.log(this.props)
        let {user} = this.state
 let {match:{params:{id}}} = this.props;
        console.log("id"+ id)
        return (
            <div>
                {user&&<div>{user.id}-{user.name}</div>}

            </div>
        );
    }

    async componentDidMount() {
        console.log("idMOUNT"+ this.state.id)
        this.setState({user: await this.userService.user(this.state.id)})

    }
}

export default withRouter(FullUser);
