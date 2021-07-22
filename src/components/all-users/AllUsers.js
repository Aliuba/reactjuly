import React, {Component} from 'react';
import UserService from "../../services/userService";
import User from "../user/user";
import {Route, Switch, withRouter} from 'react-router-dom'
import FullUser from "../fulluser/fullUser";

class AllUsers extends Component {

    userService = new UserService();
    state = {users: []};


    render() {
        let {users} = this.state
        const {match: {url}} = this.props;
        return (
            <div>
                {users.map(value => <User user={value} key={value.id}/>)}
                <hr/>
                <div>
                    <Switch>
                        <Route path={`${url}/:id`} exact={true} render={(props) =>
                            <FullUser {...props} key={props.match.params.id} />}/>

                    </Switch>
                </div>
            </div>

        );
    }

    async componentDidMount() {
        this.setState({users: await this.userService.users()})
    }


}

export default withRouter(AllUsers);
