// import React, {Component} from 'react'
// import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
// import logo from '../Assets/images/logo.png'
//
// class RegisterForm extends Component {
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
//         fetch('/api/auth/register', {
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
//                 alert("Sign up failed");
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
//                         <img src={logo}/> Register your account
//                     </Header>
//                     <Form size='large' onSubmit={this.handleSubmit}>
//                         <Segment stacked>
//                             <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.handleEmailChange}/>
//                             <Form.Input
//                                 fluid
//                                 icon='lock'
//                                 iconPosition='left'
//                                 placeholder='Password'
//                                 type='password'
//                                 onChange={this.handlePWChange}
//                             />
//                             <Form.Input
//                                 fluid
//                                 icon='lock'
//                                 iconPosition='left'
//                                 placeholder='Confirm Your Password'
//                                 type='password'
//                             />
//
//                             <Button color='teal' fluid size='large' type='submit'>
//                                 Sign Up
//                             </Button>
//                         </Segment>
//                     </Form>
//                     <Message>
//                         Already have an account? <a href='/loginform'>Login</a>
//                     </Message>
//                 </Grid.Column>
//             </Grid>
//         )
//     }
//
// }
//
// export default RegisterForm


import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/featured/?trip)',
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
}));

const initialState = {
    error: null, // you could put error messages here if you wanted
    person: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    }
};

function handleSubmit(event){
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
            this.setState({firstName: ''});
            this.setState({lastName: ''})
            this.setState({email: ''});
            this.setState({password: ''})
        }
    });
}

function handleEmailChange(event){
    this.setState({email: event.target.value});
}

function handlePWChange(event){
    this.setState({password: event.target.value});
}

function handleFirstNameChange(event){
    this.setState({firstName: event.target.value});
}

function handleLastNameChange(event){
    this.setState({lastName: event.target.value});
}

export default function Register() {
    const classes = useStyles();
    const state = initialState;
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleFirstNameChange}
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                           value={state.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleLastNameChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                           value={state.lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField onChange={handleEmailChange}
                                       variant="outlined"
                                       margin="normal"
                                       required
                                       fullWidth
                                       id="email"
                                       label="Email Address"
                                       name="email"
                                       autoComplete="email"
                                       autoFocus
                                       value={state.email}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField onChange={handlePWChange}
                                       variant="outlined"
                                       margin="normal"
                                       required
                                       fullWidth
                                       name="password"
                                       label="Password"
                                       type="password"
                                       id="password"
                                       autoComplete="current-password"
                                       value={state.password}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField onChange={handlePWChange}
                                       variant="outlined"
                                       margin="normal"
                                       required
                                       fullWidth
                                       name="confirm_password"
                                       label="confirm_password"
                                       type="password"
                                       id="confirm_password"
                                       autoComplete="current-password"
                                       value={state.password}
                            />
                        </Grid>
                        </Grid>
                        <Button onSubmit={handleSubmit}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container justify="right" alignItems="right">
                            <Grid item >
                                <Link href="/loginform" variant="body2">
                                    {"Already have an account? Login"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}