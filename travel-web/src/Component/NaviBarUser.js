import React, {Component} from 'react';
import store from "./store";
import {Button} from "react-bootstrap";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {Dropdown, Icon} from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";

class NaviBarUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            auth: false
        };
        if (store.getState().authenticated) {
            this.setState({
                username: store.getState().currentUser.username,
                auth: true
            })
        }
        store.subscribe(()=>{
            this.setState({
                username: store.getState().currentUser.username,
                auth: store.getState().authenticated
            })
        });
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(){
        this.props.dispatch({type:'LOGOUT_USER'});
        localStorage.clear();
    }

    render() {
        const trigger = (
            <span>
             <Icon name='user'/> Hello, {this.state.username}
            </span>
        );
        const options = [
            {
                key: 'user',
                text: (
                    <span>
                        Signed in as <strong>{this.state.username}</strong>
                    </span>
                ),
                disabled: true,
            },
            {key: 'profile', text: 'Your Profile', href: "/profile"},
            {key: 'favorites', text: 'Favorites'},
            {key: 'sign-out', text: 'Sign Out', onClick: this.handleLogout},
        ];
        if (this.state.auth) {
            return (
                <Dropdown trigger={trigger} options={options} style={{color: 'yellow'}}/>
            )
        } else {
            return (
                <ButtonToolbar>
                    <Button variant="outline-info" href="/login">Login </Button>
                    <Button variant="outline-info" href="/register">Register </Button>
                </ButtonToolbar>
            );
        }
    }

}

export default connect()(NaviBarUser);