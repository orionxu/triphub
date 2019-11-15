import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../Assets/images/logo.png'

class Login extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePWChange = this.handlePWChange.bind(this);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
    }

    handlePWChange(event){
        this.setState({password: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
            }).then((response) => {
            if (response.ok) {
                let path = '/profile';
                this.props.history.push(path)
            } else {
                alert("Log in failed");
                this.setState({email: ''});
                this.setState({password: ''})
            }
        });
    }

    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <img src={logo}/> Log-in to your account
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'value={this.state.email} onChange={this.handleEmailChange}/>
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value={this.state.password}
                                onChange={this.handlePWChange}
                            />

                            <Button type='submit' color='teal' fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='/registerform'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Login