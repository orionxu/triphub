import React, {Component} from 'react';
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
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

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
});

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePWChange = this.handlePWChange.bind(this);
        this.handlePW2Change = this.handlePW2Change.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.state = {
            error: null,
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
            checkedMuseum: false,
            checkedPark: false,
            checkedShopping: false,
            checkedLandmark: false,
            checkedAmusement: false,
            checkedNature: false
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"username": this.state.email, "password": this.state.password})
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return null;
            }
        }).then((response)=>{
            if (response) {
                localStorage.setItem('token', response.token);
                this.props.loginState(response.user);
                let path = '/profile';
                this.props.history.push(path)
            } else {
                alert("Sign up failed");
                this.setState({firstName: ''});
                this.setState({lastName: ''});
                this.setState({email: ''});
                this.setState({password: ''});
                this.setState({confirmPassword: ''});
            }
        });
    }


    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePWChange(event) {
        this.setState({password: event.target.value});
    }

    handlePW2Change(event) {
        this.setState({confirmPassword: event.target.value});
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleChecked(name) {
        return (event) => {
            this.setState({[name]: event.target.checked})
        }
    }

    render() {
        const {classes} = this.props;
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
                            Sign Up
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                            <Grid container>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        {"Already have an account? Login"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={this.handleFirstNameChange}
                                               autoComplete="fname"
                                               name="firstName"
                                               variant="outlined"
                                               required
                                               fullWidth
                                               id="firstName"
                                               label="First Name"
                                               autoFocus
                                               value={this.state.firstName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={this.handleLastNameChange}
                                               variant="outlined"
                                               required
                                               fullWidth
                                               id="lastName"
                                               label="Last Name"
                                               name="lastName"
                                               autoComplete="lname"
                                               value={this.state.lastName}
                                    />
                                </Grid>
                                <Grid item xs={12}>
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
                                </Grid>
                                <Grid item xs={12}>
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
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={this.handlePW2Change}
                                               variant="outlined"
                                               margin="normal"
                                               required
                                               fullWidth
                                               name="confirm_password"
                                               label="confirm_password"
                                               type="password"
                                               id="confirm_password"
                                               autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <h4> Preference </h4>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.checkedMuseum}
                                                          onChange={this.handleChecked('checkedMuseum')}
                                                          value="checkedMuseum"/>
                                            }
                                            label="Museum"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.checkedPark}
                                                          onChange={this.handleChecked('checkedPark')}
                                                          value="checkedPark"/>
                                            }
                                            label="Park"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.checkedShopping}
                                                          onChange={this.handleChecked('checkedShopping')}
                                                          value="checkedShopping"/>
                                            }
                                            label="Shopping"
                                        />
                                    </FormGroup>

                                </Grid>
                                <Grid item xs={12}>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.checkedLandmark}
                                                          onChange={this.handleChecked('checkedLandmark')}
                                                          value="checkedLandmark"
                                                />
                                            }
                                            label="Landmark"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.checkedAmusement}
                                                          onChange={this.handleChecked('checkedAmusement')}
                                                          value="checkedAmusement"/>
                                            }
                                            label="Amusement"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.checkedNature}
                                                          onChange={this.handleChecked('checkedNature')}
                                                          value="checkedNature"/>
                                            }
                                            label="Nature"
                                        />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                            <Button type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                            >
                                Sign Up
                            </Button>
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

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
    loginState: userinfo => dispatch({type: 'LOGIN_USER', payload: userinfo})
});

export default compose(withStyles(styles, {withTheme: true}), connect(null, mapDispatchToProps))(Register);