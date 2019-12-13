import React, {Component} from 'react';
import store from "./store";
import {Button, Nav} from "react-bootstrap";
import {Dropdown, Icon} from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";
import {NavLink} from "react-router-dom"
import history from "./history"
import { withRouter } from "react-router-dom"

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
        history.push("/");
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
                <Nav>
                    <Button variant="outline-primary" style={{marginRight: 10}}><NavLink to="/login" style={{color: '#A9A9A9', textDecoration: 'none'}} activeStyle={{color: 'yellow', textDecoration: 'none'}}>Login</NavLink></Button>
                    <Button variant="outline-primary" style={{marginRight: 10}}><NavLink to="/register" style={{color: '#A9A9A9', textDecoration: 'none'}} activeStyle={{color: 'yellow', textDecoration: 'none'}}>Register</NavLink></Button>
                </Nav>
            );
        }
    }

}

export default withRouter(connect()(NaviBarUser));