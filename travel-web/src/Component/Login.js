// import React, {Component} from 'react'
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// import logo from '../Assets/images/logo.png'
//
// class Login extends Component{
//
//     constructor(props){
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleEmailChange = this.handleEmailChange.bind(this);
//         this.handlePWChange = this.handlePWChange.bind(this);
//         this.state = {
//             email: '',
//             password: '',
//         };
//     }
//
//     handleEmailChange(event){
//         this.setState({email: event.target.value});
//     }
//
//     handlePWChange(event){
//         this.setState({password: event.target.value});
//     }
//
//     handleSubmit(event){
//         event.preventDefault();
//         const data = new FormData(event.target);
//         fetch('/api/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json, text/plain, */*',
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify(this.state)
//             }).then((response) => {
//             if (response.ok) {
//                 let path = '/profile';
//                 this.props.history.push(path)
//             } else {
//                 alert("Log in failed");
//                 this.setState({email: ''});
//                 this.setState({password: ''})
//             }
//         });
//     }
//
//     render() {
//         return (
//             <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
//                 <Grid.Column style={{maxWidth: 450}}>
//                     <Header as='h2' color='teal' textAlign='center'>
//                         <img src={logo}/> Log-in to your account
//                     </Header>
//                     <Form size='large' onSubmit={this.handleSubmit}>
//                         <Segment stacked>
//                             <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'value={this.state.email} onChange={this.handleEmailChange}/>
//                             <Form.Input
//                                 fluid
//                                 icon='lock'
//                                 iconPosition='left'
//                                 placeholder='Password'
//                                 type='password'
//                                 value={this.state.password}
//                                 onChange={this.handlePWChange}
//                             />
//
//                             <Button type='submit' color='teal' fluid size='large'>
//                                 Login
//                             </Button>
//                         </Segment>
//                     </Form>
//                     <Message>
//                         New to us? <a href='/registerform'>Sign Up</a>
//                     </Message>
//                 </Grid.Column>
//             </Grid>
//         )
//     }
// }
//
// export default Login

import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                TripHub
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const styles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/featured/?travel)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePWChange = this.handlePWChange.bind(this);
        this.state = {
            error: null,
            email: "",
            password: ""
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"username": this.state.email, "password": this.state.password})

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

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePWChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        const {classes} = this.props
        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={false} sm={4} md={7} className={classes.image}/>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                            <TextField onChange={this.handleEmailChange}
                                       variant="outlined"
                                       margin="normal"
                                       required
                                       fullWidth
                                       id="email"
                                       label="Email Address"
                                       name="email"
                                       autoComplete="email"
                                       autoFocus
                                       value={this.state.email}
                            />
                            <TextField onChange={this.handlePWChange}
                                       variant="outlined"
                                       margin="normal"
                                       required
                                       fullWidth
                                       name="password"
                                       label="Password"
                                       type="password"
                                       id="password"
                                       autoComplete="current-password"
                                       value={this.state.password}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/registerform" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright/>
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles, {withTheme: true})(Login);