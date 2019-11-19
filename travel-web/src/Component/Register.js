import React, {Component} from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import logo from '../Assets/images/logo.png'

class RegisterForm extends Component {

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
        fetch('/api/auth/register', {
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
                alert("Sign up failed");
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
                        <img src={logo}/> Register your account
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.handleEmailChange}/>
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={this.handlePWChange}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Confirm Your Password'
                                type='password'
                            />

                            <Button color='teal' fluid size='large' type='submit'>
                                Sign Up
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account? <a href='/loginform'>Login</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }

}

export default RegisterForm
